import qiniu from 'qiniu';
import fs from 'fs';
import path from 'path';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

// eslint-disable-next-line no-undef
const argv = yargs(hideBin(process.argv))
    .option('accessKey', {
        alias: 'a',
        description: 'accessKey',
        type: 'string',
        demandOption: true, // 强制要求提供此参数
    })
    .option('secretKey', {
        alias: 's',
        description: 'secretKey',
        type: 'string',
        demandOption: true, // 强制要求提供此参数
    })
    .help().argv;

// 配置七牛云密钥
const accessKey = argv.accessKey;
const secretKey = argv.secretKey;
const bucket = 'jstaff-cd'; // 你的存储空间名称
const folderPath = 'dist'; // 需要上传的本地文件夹路径

const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
    scope: bucket,
    mimeLimit: 'image/*;text/html,text/css,application/javascript,application/json',
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

console.log('uploadToken', uploadToken);

// 配置上传
const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z2; // 选择存储区域，根据你的存储区域调整

// 创建上传对象
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();

// 创建 BucketManager 实例
const bucketManager = new qiniu.rs.BucketManager(mac, config);

// 删除文件
const deleteFile = (key, callback) => {
    void bucketManager.delete(bucket, key, function (err, respBody, respInfo) {
        if (err) {
            console.error(`删除文件失败：${key}`, err);
        } else if (respInfo.statusCode === 200) {
            console.log(`文件已删除：${key}`);
        } else {
            console.error(`删除失败，响应信息：${key}`, respInfo);
        }
        callback();
    });
};

// 递归读取并上传文件
const uploadDirectory = (dir, baseDir = '') => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return console.error('读取文件夹失败：', err);
        }

        files.forEach((file) => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    return console.error(`获取文件信息失败：${file}`, err);
                }

                if (stats.isDirectory()) {
                    uploadDirectory(filePath, path.join(baseDir, file));
                } else if (stats.isFile()) {
                    const key = path.join(baseDir, file).replace(/\\/g, '/'); // 处理路径分隔符

                    // 先删除文件，再上传
                    deleteFile(key, () => {
                        void formUploader.putFile(
                            uploadToken,
                            key,
                            filePath,
                            putExtra,
                            function (err, body, info) {
                                if (err) {
                                    console.error(`上传失败：${file}`, err);
                                } else {
                                    if (info.statusCode === 200) {
                                        console.log(`上传成功：${key}`, body);
                                    } else {
                                        console.error(`上传失败，响应信息：${key}`, info);
                                    }
                                }
                            },
                        );
                    });
                }
            });
        });
    });
};

// 开始上传
uploadDirectory(folderPath);

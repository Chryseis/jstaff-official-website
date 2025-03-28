import qiniu from 'qiniu';
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
    .option('urlsToRefresh', {
        alias: 'u',
        description: 'urlsToRefresh',
        type: 'string',
        demandOption: true, // 强制要求提供此参数
    })
    .help().argv;

// 配置
const accessKey = argv.accessKey;
const secretKey = argv.secretKey;
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const cdnManager = new qiniu.cdn.CdnManager(mac);

// 要刷新的文件路径，可以是单个文件，也可以是多个文件（数组）
const urlsToRefresh = argv.urlsToRefresh.split(',');

// 执行刷新操作
cdnManager.refreshUrls(urlsToRefresh, function (err, body, info) {
    if (err) {
        console.log('刷新 CDN 缓存失败:', err);
    } else {
        if (info.statusCode === 200) {
            console.log('CDN 缓存刷新成功:', body);
        } else {
            console.log('CDN 刷新失败:', body);
        }
    }
});

import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import qrcode from '@/assets/images/qrcode.jpg';
import React, { useState } from 'react';

const ContactUs = (props) => {
    const [open, setIsOpen] = useState(false);

    return (
        <>
            {React.cloneElement(props.children, {
                onClick: () => setIsOpen(true),
            })}
            <Dialog open={open} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen bg-black/75 items-center justify-center p-4 transition">
                    <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                        <DialogTitle className="font-bold">商务咨询</DialogTitle>
                        <Description>
                            欢迎体验我们的变调夹，扫描微信二维码与我们交流合作！
                        </Description>
                        <img src={qrcode} alt="" />
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

export default ContactUs;

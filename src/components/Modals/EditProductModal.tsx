import { type FC } from "react";

interface EditProductModalProps {
    onClose: () => void;

}

export const EditProductModal: FC<EditProductModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            >
                <div
                    className="h-48 w-48 bg-orange-900"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </div>
    )
}

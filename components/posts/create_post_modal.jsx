import { IconImages } from "@/public/icon_images"

const CreatePostModal = ({profile, closeModal}) => {
    return (
        <div className="fixed inset-0 py-14 px-6 z-50 flex items-center justify-center">
            {/* Modal background */}
            <div>
                <div
                    className="absolute inset-0 bg-gray-200 opacity-70"
                    onClick={closeModal} // Clicking on the background closes the modal
                />
            </div>
            {/* Modal content */}
            <div className="relative z-10 bg-white py-4 rounded-lg shadow-lg max-w-lg w-full">
                
                {/* Close button inside modal */}
                <div className="block">
                    <div className="flex justify-center pb-4 w-full">
                        <p className="font-bold text-[1.25rem]">Create post</p>
                    </div>
                    <button className="absolute flex justify-center rounded-full items-center top-2 pl-1 pt-1 w-9 h-9 bg-[#e4e6eb] right-2 text-gray-500" onClick={closeModal}>
                        <IconImages.Close className="w-6 h-6 opacity-45"/>
                    </button>
                </div>
                <hr className="border-none h-[1px] bg-gray-200"/>
                <div id="model_content" className="p-4">
                    <div id="content_user-detail">
                        <div style={{backgroundImage: `url(${profile.image})`}}
                            className="h-10 w-10 p-2 rounded-full bg-gray-200 bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-80 active:opacity-60">
                        </div>
                        <div>
                            <p>{profile.name}</p>
                        </div>
                    </div>
                    <button className="w-full mt-3 bg-gray-400 p-1 px-3 rounded-md font-semibold opacity-30">Post</button>
                </div>
            </div>
            
        </div>
    )
}

export default CreatePostModal

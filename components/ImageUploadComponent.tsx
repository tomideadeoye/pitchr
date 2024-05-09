import React from "react"
import ImageUploading, { ImageType } from "react-images-uploading"

import { Cloud } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

interface Props {
  images: ImageType[]
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>
  setDefaultImage?: React.Dispatch<React.SetStateAction<ImageType>>
  defaultImage?: ImageType
  previousImages?: any[]
  multiple?: boolean
}

const ImageUploadComponent = ({ setImages, images, multiple = true }: Props) => {
  const maxNumber = 5

  const onChange = (imageList: any[]) => {
    setImages(imageList)
  }

  return (
    <ImageUploading
      multiple={multiple}
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      allowNonImageType
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
        errors,
      }) => (
        <div className="upload__image-wrapper flex flex-col gap-3">
          <div className="flex w-full flex-col items-center">
            <div className="flex w-full flex-col gap-2">
              <div
                className="flex w-full cursor-pointer items-center justify-center rounded-md border-[2px] border-dashed border-gray-200 p-4 py-6 hover:border-gray-600"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                <div className="align-center flex gap-2">
                  <Cloud className="text-xl text-primary" />
                  <Separator orientation="vertical" />
                  <div className="align-center flex flex-col gap-2">
                    <p className="text-bold break-words text-sm">
                      {false ? "filename" : "Drop images here or click to browse"}
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      Supported file types: JPEG, PNG, PDF. Max file size: 5MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {errors && (
              <div>
                {errors?.maxNumber && (
                  <p className="mt-2 text-sm text-primary">Number of selected images exceed maxNumber</p>
                )}
                {errors?.acceptType && (
                  <p className="mt-2 text-sm text-primary">Your selected file type is not allow</p>
                )}
                {errors?.maxFileSize && (
                  <p className="mt-2 text-sm text-primary">Selected file size exceed maxFileSize</p>
                )}
                {errors?.resolution && (
                  <p className="mt-2 text-sm text-primary">Selected file is not match your desired resolution</p>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => {
              return (
                <div key={index} className="image-item flex items-center gap-2">
                  <div className="text-black">
                    <img src={image["data_url"]} alt="" width="100" />{" "}
                    <p className="mt-2 text-xs text-primary max-w-[50px]">{image?.file?.name}</p>
                  </div>
                  <div className="image-item__btn-wrapper flex flex-col gap-2 rounded-full text-white">
                    <Button onClick={() => onImageUpdate(index)}>Update</Button>
                    <Button onClick={() => onImageRemove(index)}>Remove</Button>
                  </div>
                </div>
              )
            })}
          </div>
          {/* {images.length > 1 ? <Button onClick={onImageRemoveAll}>Remove all files</Button> : null} */}
        </div>
      )}
    </ImageUploading>
  )
}

export default ImageUploadComponent

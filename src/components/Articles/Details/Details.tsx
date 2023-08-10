import Image from 'next/image';

export const Details = ({
  imageUrl,
  linkPage,
  content,
}:any) => {

  return (
    <div className="overlays">
      <div className="wrapper">
        <div className="img-box">
          <Image
            src={imageUrl}
            alt="Image"
            sizes="100%"
            fill
          />
        </div>

        <p>{content}</p>
      </div>
    </div>
  )
}

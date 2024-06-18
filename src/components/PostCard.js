import { FaRegBookmark } from "react-icons/fa6";
function PostCard({
  title,
  coverUrl,
  description,
  publishDate,
  readTime,
  linkUrl,
  className,
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={coverUrl} alt="Post Cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <a className="link link-hover" href={linkUrl}>
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <div className="card-actions">
          <p className="text-sm">May 16, 2023 - 5 min read</p>
          <a className="link link-primary pt-2" href={linkUrl}>
            <FaRegBookmark size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostCard;

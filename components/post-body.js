import markdownStyles from "./markdown-styles.module.scss";

export default function PostBody({ content }) {
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

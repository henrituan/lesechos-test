import { css } from "@panda/css"
import Link from "next/link";

type ArticleCardProps = {
  title: string;
  description: string;
  image: string;
  ctaType: 'login' | 'subscribe';
};

export const ArticleCard = ({ title, description, image, ctaType }: ArticleCardProps) => {
  return (
    <div className={css({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    })}>
      <Link
        href="/"
        style={{ backgroundImage: `url(${image}?random=${Math.random()})` }}
        className={
          css({
            display: "block",
            width: "100%",
            height: "200px",
            bgSize: "cover",
            bgPosition: "center",
            opacity: "1",
            transition: "opacity 0.3s ease-in-out",
            _hover: {
              opacity: "0.5",
            }
          })
        }
      />

      <h3 className={css({
        position: 'absolute',
        top: '30%',
        left: '0',
        right: '0',
        color: 'white',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        fontSize: 'title.lg',
        fontWeight: 'bold',
        pointerEvents: "none",
      })}>{title}</h3>

      <p className={css({
        color: "text",
        textAlign: "center",
        lineHeight: "1.5",
      })}>
        {description}
      </p>

      <button>{ctaType}</button>
    </div>
  )
}
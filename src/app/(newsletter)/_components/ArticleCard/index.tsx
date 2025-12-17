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
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    })}>
      <div className={css({
        position: 'relative',
        overflow: 'hidden',
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
        >
        </Link>
        <div className={css({
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: "none",
        })}>
          <h3 className={css({
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            fontSize: 'title.lg',
            fontWeight: 'bold',
            color: 'white',
          })}>
            {title}
          </h3>
        </div>
      </div>

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
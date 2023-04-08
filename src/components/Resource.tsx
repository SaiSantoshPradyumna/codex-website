import styles from "../styles/resource.module.css";
import Image from "next/legacy/image";
const Resource = (props: any) => {
    return (
        <a href={"/UnderConstruction"}>
            <div className={styles.box}>
                <Image
                    src={`${props.image}`}
                    alt="front-end"
                    className={styles.img1}
                    width={500}
                    height={500}
                />
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
                <Image src={props.desg} alt="rec" className={styles.img2} />
            </div>
        </a>
    );
};
export default Resource;

import styles from "./CarouselButton.module.scss";

const CarouselButton = ({ direction, updateIndices, step }) => {
  return (
    <img
      className={styles.carousel__button}
      src={`caret-${direction}.svg`}
      alt={`${direction.toUpperCase()} Arrow`}
      onClick={() => updateIndices(step)}
    />
  );
};

export default CarouselButton;

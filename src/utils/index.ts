export const getRandomNumber = (min: number, max: number): number =>
    Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
    );

import { ButtonTypeEnum } from '../models/buttonType'

interface Props {
  text: string;
  buttonType: ButtonTypeEnum;
}

export const Button: React.FC<Props> = ({ text, buttonType }) => {
  const classes = (buttonType: ButtonTypeEnum): string => {
    let classes: string = 'p-4 pb-3 border-b-4 text-lg text-white rounded-xl font-bold text-center cursor-pointer';

    if (buttonType === ButtonTypeEnum.DEFAULT) {
      classes = `${classes} bg-gray-100 border-gray-300 text-gray-800`;
    }

    if (buttonType === ButtonTypeEnum.PRIMARY) {
        classes = `${classes} bg-blue-400 border-blue-500 text-white`;
    }

    if (buttonType === ButtonTypeEnum.SECONDARY) {
        classes = `${classes} bg-red-500 border-red-600 text-white`;
    }

    return classes;
}
  return (
    <div className={classes(buttonType)}>
      <p>{text}</p>
    </div>
  )
}

export enum KeysEnum {
  ENTER = 'Enter',
  BACKSPACE = 'Backspace',
  ESCAPE = 'Escape',
	ONE = '1',
	TWO = '2',
	THREE = '3',
	FOUR = '4',
	FIVE = '5',
	SIX = '6',
	SEVEN = '7',
	EIGHT = '8',
	NINE = '9',
	ZERO = '0',
	DECIMAL = '.',
};

export enum OperatorEnum {
  ADDITION = '+',
  SUBTRACTION = '-',
  MULTIPLICATION = '*',
  DIVISION = '/'
 }


export const handledKeys = [
	KeysEnum.ENTER,
	KeysEnum.BACKSPACE,
	KeysEnum.ESCAPE,
	KeysEnum.ONE,
	KeysEnum.TWO,
	KeysEnum.THREE,
	KeysEnum.FOUR,
	KeysEnum.FIVE,
	KeysEnum.SIX,
	KeysEnum.SEVEN,
	KeysEnum.EIGHT,
	KeysEnum.NINE,
	KeysEnum.ZERO,
	KeysEnum.DECIMAL,
	OperatorEnum.ADDITION,
	OperatorEnum.SUBTRACTION,
	OperatorEnum.MULTIPLICATION,
	OperatorEnum.DIVISION
];

export const isNumberPressed = (key): boolean => {
	if (key === KeysEnum.ONE || key === KeysEnum.TWO || key === KeysEnum.THREE || key === KeysEnum.FOUR|| key === KeysEnum.FIVE|| key === KeysEnum.SIX || key === KeysEnum.SEVEN|| key === KeysEnum.EIGHT || key === KeysEnum.NINE || key === KeysEnum.ZERO|| key === KeysEnum.DECIMAL) {
		return true;
	}
}

export const isOperatorPressed = (key): boolean => {
	if (key === OperatorEnum.ADDITION || key === OperatorEnum.SUBTRACTION || key === OperatorEnum.MULTIPLICATION || key === OperatorEnum.DIVISION) {
		return true;
	}
}

import { Box, Typography, } from '@mui/material'
import { styles } from './HomeStyles'
import { BackspaceOutlined } from '@mui/icons-material'
import { useState } from 'react'

interface IState {
    result: number,
    inputValue: string,
}

function Home() {
    const [inputValue, setInputValue] = useState<IState['inputValue']>('')
    const [result, setResult] = useState<IState['result']>(0)

    const onClickButton = (value: string) => {
        setInputValue(inputValue.concat(value))

        // This is for last sign replacement(no repetation of +,-,*,/,%) 
        switch (value) {
            case '+':
                if (inputValue[inputValue.length - 1].search(/[^+-/%*]/)) {
                    setInputValue(inputValue.replace(/.$/, "+"))
                }
                break;
            case '-':
                if (inputValue[inputValue.length - 1].search(/[^+-/%*]/)) {
                    setInputValue(inputValue.replace(/.$/, "-"))
                }
                break;
            case '*':
                if (inputValue[inputValue.length - 1].search(/[^+-/%*]/)) {
                    setInputValue(inputValue.replace(/.$/, "*"))
                }
                break;
            case '/':
                const roundedValue = Number(result.toFixed(2))
                setResult(roundedValue)
                if (inputValue[inputValue.length - 1].search(/[^+-/%*]/)) {
                    setInputValue(inputValue.replace(/.$/, "/"))
                }
                break;
            case '%':
                if (inputValue[inputValue.length - 1].search(/[^+-/%*]/)) {
                    setInputValue(inputValue.replace(/.$/, "%"))
                }
                break;
            case '.':
                if (inputValue[inputValue.length - 1].search(/[^+-/%*.]/)) {
                    setInputValue(inputValue.replace(/.$/, "."))
                }
                break;
            default:
                break;
        }
    }

    const onClickAllClear = () => {
        setInputValue('')
        setResult(0)
    }

    const onClearSingle = () => {
        const length = inputValue.length - 1
        for (let i = length; i >= 0; i--) {
            setInputValue(inputValue.slice(0, i))
            break
        }
    }

    const onClickEqual = () => {
        let trimmedInputValue
        inputValue === '' && alert('Please enter a valid input')
        if (inputValue !== '' && inputValue[inputValue.length - 1].search(/[^+-/%*.]/)) {
            trimmedInputValue = inputValue.slice(0, inputValue.length - 1)
        } else {
            trimmedInputValue = inputValue
        }

        try {
            trimmedInputValue && setResult(eval(trimmedInputValue))
        } catch (error) {
            alert(error)
            return
        }
    }


    return (
        <Box sx={styles.bgContainer}>
            <Typography variant='h2'>Calculator</Typography>
            <Box sx={styles.contentContainer}>
                <Box sx={styles.resultContainer}>
                    <Box sx={styles.numsInput} component={'input'} autoFocus={true} value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                    <Box component='span' sx={{ ...styles.result, }}>{result}</Box>
                </Box>
                <Box sx={styles.inputContainer}>
                    <Box sx={styles.eachRow}>
                        <Box component={'button'} sx={styles.spclButton} onClick={onClickAllClear}>AC</Box>
                        <Box component={'button'} sx={styles.spclButton} onClick={onClearSingle}><BackspaceOutlined
                            sx={{ fontSize: '18px' }} /></Box>
                        <Box component={'button'} sx={styles.spclButton} onClick={() => onClickButton('%')}>%</Box>
                        <Box component={'button'} sx={styles.spclButton} onClick={() => onClickButton('/')}>/</Box>
                    </Box>

                    <Box sx={styles.eachRow}>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('7')}>7</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('8')}>8</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('9')}>9</Box>
                        <Box component={'button'} sx={styles.spclButton} onClick={() => onClickButton('*')}>x</Box>
                    </Box>

                    <Box sx={styles.eachRow} >
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('4')}>4</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('5')}>5</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('6')}>6</Box>
                        <Box component={'button'} sx={styles.spclButton} onClick={() => onClickButton('-')}>-</Box>
                    </Box>

                    <Box sx={styles.eachRow}>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('1')}>1</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('2')}>2</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('3')}>3</Box>
                        <Box component={'button'} sx={styles.spclButton} onClick={() => onClickButton('+')}>+</Box>
                    </Box>

                    <Box sx={styles.eachRow}>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('00')}>00</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('0')}>0</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('.')}>.</Box>
                        <Box component={'button'} sx={styles.equalButton} onClick={onClickEqual}>=</Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}
export default Home
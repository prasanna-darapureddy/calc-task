import { Box, Typography,} from '@mui/material'
import { styles } from './HomeStyles'
import { BackspaceOutlined } from '@mui/icons-material'
import { useState } from 'react'

interface IState{
    result:number,
    inputValue: string,
}

function Home() {
    const [inputValue, setInputValue] = useState<IState['inputValue']>('')
    const [result, setResult] = useState<IState['result']>(0)

    const onClickButton = (value:string) => { 
        setInputValue(inputValue.concat(value))  

       // This is for last sign replacement(no repetation of +,-,*,/,%) 
       switch (value) {
        case '+':
            if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
                setInputValue(inputValue.replace(/.$/,"+"))
            }
            break;
        case '-':
            if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
                setInputValue(inputValue.replace(/.$/,"-"))
            }
            break;
        case '*':
            if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
                setInputValue(inputValue.replace(/.$/,"*"))
            }
            break;
        case '/':
            const roundedValue = Number(result.toFixed(2))
            setResult(roundedValue)
            if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
                setInputValue(inputValue.replace(/.$/,"/"))
            }
            break;
        case '%':
            if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
                setInputValue(inputValue.replace(/.$/,"%"))
            }
            break;
        case '.':
            if(inputValue[inputValue.length-1].search(/[^+-/%*.]/)) {
                setInputValue(inputValue.replace(/.$/,"."))
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
        const length = inputValue.length-1
        for(let i = length; i >= 0; i--) {
            setInputValue(inputValue.slice(0, i))
            break
        }     
    }

    const onClickEqual = () => {          
        let trimmedInputValue        
        inputValue === '' && alert('Please enter a valid input') 
        if(inputValue !== ''  && inputValue[inputValue.length-1].search(/[^+-/%*.]/)) {   
            trimmedInputValue = inputValue.slice(0, inputValue.length-1)
        }else {
            trimmedInputValue = inputValue
        }
        
        try{          
           trimmedInputValue && setResult(eval(trimmedInputValue)) 
        }catch(error){
            alert(error)
            return
        }
    }
    

  return (
    <>
        <Box sx={styles.bgContainer}>
            <Typography variant='h2'>Calculator</Typography>
            <Box sx={styles.contentContainer}>
                <Box sx={styles.resultContainer}>
                    <Box sx={styles.numsInput} component={'input'} autoFocus={true} value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}/>         
                    <Box component='span' sx={{...styles.result,}}>{result}</Box>
                </Box>
                <Box sx={styles.inputContainer}>
                    <Box sx={styles.eachRow}>
                        <Box component={'button'} sx={styles.spclButton} onClick={onClickAllClear}>AC</Box>
                        <Box component={'button'} sx={styles.spclButton} onClick={onClearSingle}><BackspaceOutlined 
                        sx={{fontSize:'18px'}}/></Box>                    
                        <Box component={'button'} sx={styles.spclButton} onClick={() => onClickButton('%')}>%</Box>
                        <Box component={'button'} sx={styles.spclButton} onClick={()=>onClickButton('/')}>/</Box>
                    </Box>

                    <Box sx={styles.eachRow}>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('7')}>7</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('8')}>8</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('9')}>9</Box>
                        <Box component={'button'} sx={styles.spclButton} onClick={()=>onClickButton('*')}>x</Box>
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
                        <Box component={'button'} sx={styles.spclButton} onClick={()=>onClickButton('+')}>+</Box>
                    </Box>
                    
                    <Box sx={styles.eachRow}> 
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('00')}>00</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('0')}>0</Box>
                        <Box component={'button'} sx={styles.numButton} onClick={() => onClickButton('.')}>.</Box>
                        <Box component={'button'} sx={styles.equalButton} onClick = {onClickEqual}>=</Box>
                    </Box>
                  
                </Box>
            </Box>
        </Box>
    </>
  )
}
export default Home





// import { Box, Typography,} from '@mui/material'
// import { styles } from './HomeStyles'
// import { BackspaceOutlined } from '@mui/icons-material'
// import { useState } from 'react'

// interface IState{
//     operations: string,
//     num:string,
//     result:number,
//     isOperated:boolean,
//     inputValue: string,
// }

// function Home() {
//     const [inputValue, setInputValue] = useState<IState['inputValue']>('')
//     const [operations, setOperations] = useState<IState['operations']>('')    
//     const [isOperated, setIsOperated] = useState<IState['isOperated']>(false)
//     const [num1, setNum1] = useState<IState['num']>('')
//     const [num2, setNum2] = useState<IState['num']>('')
//     const [result, setResult] = useState<IState['result']>(0)

//     const onClickCross = () => {
//         setOperations('multiplication')  
//         setInputValue(inputValue.concat('*'))
//         setIsOperated(!isOperated)      
//         if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
//             setInputValue(inputValue.replace(/.$/,"*")  )
//         }
//     }

//     const onClickMinus = () => {
//         setOperations('subtraction')
//         setIsOperated(!isOperated)
//         setInputValue(inputValue.concat('-'))
//         if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
//             setInputValue(inputValue.replace(/.$/,"-")  )
//         }
//     }

//     const onClickPlus = () => {
//         setOperations('addition')
//         setIsOperated(!isOperated)
//         setInputValue(inputValue.concat('+'))
//         if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
//             setInputValue(inputValue.replace(/.$/,"+")  )
//         }
//     }

//     const onClickDivision = () => {
//         setOperations('division')
//         setIsOperated(!isOperated)
//         setInputValue(inputValue.concat('/'))
//         if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
//             setInputValue(inputValue.replace(/.$/,'/')  )
//         }
//     }

//     const onClickPercentage = () => {
//         setOperations('percentage')
//         setIsOperated(!isOperated)
//         setInputValue(inputValue.concat('%'))
//         if(inputValue[inputValue.length-1].search(/[^+-/%*]/)) {
//             setInputValue(inputValue.replace(/.$/,"%")  )
//         }
//     }

//     const onClickPoint = () => {
//         setInputValue(inputValue.concat('.'))
//         if(inputValue[inputValue.length-1].search(/[^+-/%*.]/)) {
//             setInputValue(inputValue.replace(/.$/,".")  )
//         }
//     }

//     const onClickNum = (num:string) => {   
          
//         if(isOperated === true){
//             setNum2(num2.concat(num))  
//             setInputValue(inputValue.concat(num))              
//         }else{
//             setNum1(num1.concat(num))
//             setInputValue(inputValue.concat(num))   
//         }
//     }

//     const onClickAllClear = () => {
//         setOperations('')
//         setInputValue('')
//         setNum1('')
//         setNum2('')
//         setResult(0)
//     }

//     const onClearSingle = () => {        
//         const length = inputValue.length-1
//         for(let i = length; i >= 0; i--) {
//             setInputValue(inputValue.slice(0, i))
//             break
//         }     
//     }

//     const onClickEqual = () => {
//         try{          
//             setResult(eval(inputValue))                          
//         }catch(error){
//             console.log(error)
//         }
        
//         // const firstNumber = Number(num1)
//         // const secondNumber = Number(num2)
        
//         // switch (operations) {
//         //     case 'addition':
//         //         setResult(firstNumber + secondNumber)
//         //         break;
//         //     case 'subtraction':
//         //        setResult(firstNumber - secondNumber)
//         //         break
//         //     case 'multiplication':
//         //         setResult(firstNumber * secondNumber)
//         //         break
//         //     case 'division':
//         //         setResult(firstNumber/secondNumber)
//         //         break
//         //     case 'percentage':
//         //         const percent = (firstNumber * secondNumber) / 100
//         //         setResult(percent)
//         //         break
//         //     default:
//         //         break;
//         // }

//         // switch (true) {
//         //     case inputValue.includes('+'):
                
//         //         const sumNums = inputValue.split('+')
//         //         let sum = 0
//         //         for(let eachNum of sumNums){
//         //             const intNums = Number(eachNum)
//         //             sum += intNums
//         //             setResult(sum)
//         //         }
//         //         break;
//         //     case inputValue.includes('-'):
//         //         const subNums = inputValue.split('-')
//         //         console.log(subNums)
//         //         let sub = 0
//         //         for(let eachNum of subNums){
//         //             const intNums = Number(eachNum)
//         //             sub = intNums - sub
//         //             setResult(sub)
//         //             console.log(sub)
//         //         }
//         //         break;
        
//         //     default:
//         //         break;
//         // }
//     }
    

//   return (
//     <>
//         <Box sx={styles.bgContainer}>
//             <Typography variant='h2'>Calculator</Typography>
//             <Box sx={styles.contentContainer}>
//                 <Box sx={styles.resultContainer}>
//                     <Box sx={styles.numsInput} component={'input'} autoFocus={true} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>         
//                     <Box component='span' sx={styles.result}>{result}</Box>
//                 </Box>
//                 <Box sx={styles.inputContainer}>
//                     <Box sx={styles.eachRow}>
//                         <Box component={'button'} sx={styles.spclButton} onClick={onClickAllClear}>AC</Box>
//                         <Box component={'button'} sx={styles.spclButton} onClick={onClearSingle}><BackspaceOutlined sx={{fontSize:'18px'}}/></Box>                    
//                         <Box component={'button'} sx={styles.spclButton} onClick={onClickPercentage}>%</Box>
//                         <Box component={'button'} sx={styles.spclButton} onClick={onClickDivision}>/</Box>
//                     </Box>

//                     <Box sx={styles.eachRow}>
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('7')}>7</Box>
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('8')}>8</Box>
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('9')}>9</Box>
//                         <Box component={'button'} sx={styles.spclButton} onClick={onClickCross}>x</Box>
//                     </Box>
                    
//                     <Box sx={styles.eachRow} > 
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('4')}>4</Box>
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('5')}>5</Box>
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('6')}>6</Box>
//                         <Box component={'button'} sx={styles.spclButton} onClick={onClickMinus}>-</Box>
//                     </Box>
                   
//                     <Box sx={styles.eachRow}> 
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('1')}>1</Box>
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('2')}>2</Box>
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('3')}>3</Box>
//                         <Box component={'button'} sx={styles.spclButton} onClick={onClickPlus}>+</Box>
//                     </Box>
                    
//                     <Box sx={styles.eachRow}> 
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('00')}>00</Box>
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickNum('0')}>0</Box>
//                         <Box component={'button'} sx={styles.numButton} onClick={() => onClickPoint()}>.</Box>
//                         <Box component={'button'} sx={styles.equalButton} onClick={onClickEqual}>=</Box>
//                     </Box>
                  
//                 </Box>
//             </Box>
//         </Box>
//     </>
//   )
// }

// export default Home
import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
import {useForm, FormActions} from '../../context/FormContext'
import { useEffect} from 'react'
import {ReactComponent as CheckIcon} from '../../svgs/check.svg'
import {useHistory} from 'react-router-dom'

export const FormStep4 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

   
    useEffect(()=>{
        if(state.name === '') {
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
        

    },[])


    return(
        <Theme>
            <C.Container>
                
                <h2>Congratulations</h2>
                <p>Registration sent successfully!</p>

                <C.IconArea>
                   <CheckIcon fill="rgb(91, 24, 153)" width={120} height={120}/>
                </C.IconArea>

                <p className='check-email'>We sent an email to: <b>{state.email}</b> with confirmation of registration.</p>
                

            </C.Container>
        </Theme>
    )
}
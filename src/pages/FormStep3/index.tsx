import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
import {Link, useHistory} from 'react-router-dom'
import {useForm, FormActions} from '../../context/FormContext'
import {ChangeEvent, useEffect} from 'react'

export const FormStep3 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const handleNextStep = () =>{
        if(state.email !== '' && state.github !== '') {
            history.push('/step4')
        } else{
            alert('fill in the data correctly')
        }

    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    useEffect(()=>{
        if(state.name === '') {
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
        

    },[])

    return(
        <Theme>
            <C.Container>
                <p className='passo'>Step 3/3</p>
                <h2>Cool {state.name}, where do we find you?</h2>
                <p>Fill in your contact details so we can get in touch.</p>

                <label>What is your email?</label>
                <input 
                type="email" 
                onChange={handleEmailChange}
                />

                <label>What is your GitHub?</label>
                <input 
                type="url" 
                onChange={handleUrlChange}
                />

                <div>
                    <Link to='/step2'>Back</Link>
                    <button onClick={handleNextStep}>Finalize</button>
                </div>

            </C.Container>
        </Theme>
    )
}
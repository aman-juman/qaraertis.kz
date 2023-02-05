import styles from "./CallOrder.module.scss";
import Image from "next/image";
import MaskedInput from 'react-input-mask';
import {useForm, Controller, useFormContext} from "react-hook-form";
import {useState} from "react";
import cn from "classnames";



const CallOrder = () => {


    const {
        register,
        handleSubmit,
        formState:{errors},
        control
    } = useForm();

    const [error, setError] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleInput = ({ target: { value } }) => setPhone(value);
    const onHandleSubmit = data =>{
        setErrorPhone(false);
        setLoading(true);
        if(/_/.test(data.phone)){
            setErrorPhone(true);
            setLoading(false);
            return;
        }
        fetch("/api/order", {
            method: 'POST',
            headers: {'Accept': 'application/json, text/plain', 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if(res.status === 200) {
                setSuccess(true);
                setError(false);
                setLoading(false);
                setErrorPhone(false);
            }
        }).catch(err => {

            setError(true);
            setSuccess(false);
            setLoading(false);
        })
    }


// console.log(success)

    return (
        <section id="callOrder" className={styles.section}>
            {/*<Image />*/}
            <div className={styles.bg}></div>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.content}>
                        <h5 className={styles.title}>Консультация</h5>
                        <p className={styles.subTitle}>Напишите нам и мы свяжемся с Вами в самое ближайшее время</p>
                        {
                            success ? <h5 className={styles.sendSuccess}>ЗАЯВКА УСПЕШНО ОТПРАВЛЕНО</h5> : <form onSubmit={handleSubmit(onHandleSubmit)} className={styles.form}>
                                <input
                                    name="name"
                                    className={styles.input}
                                    placeholder="Ваше имя"
                                    type="text"
                                    {...register("name", {required:true})}
                                />
                                <Controller
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: true,
                                    }}
                                    name="phone"

                                    render={({field}) => (
                                        <MaskedInput
                                            mask="+7 (799) 999-99-99"
                                            value={field.value}
                                            onChange={field.onChange}
                                            placeholder="+7 (7__) ___-__-__"
                                        >
                                            {(inputProps) => (
                                                <input
                                                    {...inputProps}
                                                    className={cn(styles.input, {
                                                        [styles.errorInput]: errorPhone
                                                    })}
                                                    // className={styles.input}
                                                    type="text"/>
                                            )     }
                                        </MaskedInput>)}
                                />

                                <input className={styles.submit} value="Отправить" type="submit"/>


                            </form>
                        }

                        <p className={styles.text}>В рабочее время это заимет не больше 15 минут</p>
                        <div>{loading ? <Preloader /> : null}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallOrder;

const Preloader = () => (
    <div className={styles.preloader}>
        <div className={styles.loader}></div>
    </div>
)

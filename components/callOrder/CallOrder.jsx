import styles from "./CallOrder.module.scss";
import Image from "next/image";
import {useForm} from "react-hook-form";
import {useState} from "react";

const CallOrder = () => {


    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const onHandleSubmit = data =>{
        setLoading(true);
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
            }
        }).catch(err => {

            setError(true);
            setSuccess(false);
            setLoading(false);
        })
    }




    return (
        <section className={styles.section}>
            {/*<Image />*/}
            <div className={styles.bg}></div>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.content}>
                        <h5 className={styles.title}>Консультация</h5>
                        <p className={styles.subTitle}>Напишите нам и мы свяжемся с Вами в самое ближайшее время</p>

                        <form onSubmit={handleSubmit(onHandleSubmit)} className={styles.form}>
                            <input
                                name="name"
                                className={styles.input}
                                placeholder="Как к Вам обращаться?"
                                type="text"
                                {...register("name", {required:true})}
                            />
                            <input
                                name="phone"
                                className={styles.input}
                                placeholder="Телефон *"
                                type="number"
                                {...register("phone", {required:true})}
                            />
                            <input className={styles.submit} value="Отправить" type="submit"/>


                        </form>
                        <p className={styles.text}>В рабочее время это заимет не больше 15 минут</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallOrder;

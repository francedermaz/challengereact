import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCases, getBots, getCasesDate } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import styles from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const bots = useSelector(state=>state.bots);
    const cases = useSelector(state=>state.cases);
    const [input,setInput] = useState({
        id:"",
        start:"",
        end:""
    })

    function handleChange(e) {
        e.preventDefault();
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
    }

    function handleClick(id){
        if(id){
            setInput({...input,id:id})
            dispatch(getAllCases(id));
        }
        else{
            setInput({...input,id:bots[0].id})
            dispatch(getAllCases(bots[0].id));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        dispatch(getCasesDate(input))
        .then(()=>{
            setInput({
                id:"",
                start:"",
                end:""
            })
        })
    }

    useEffect(()=>{
        dispatch(getBots());
    },[dispatch])
    return(
        <div className={styles.all}>
            <NavBar/>
            <div className={styles.page}>
                <div className={styles.divbots}>
                    <h3 className={styles.title}>Client</h3>
                    <div className={styles.bots}>
                        {
                            bots?.map(el=>{
                                return <p className={styles.option} onClick={()=>handleClick(el.id)}>{el.name}</p>
                            })
                        }
                    </div>
                </div>
                <div className={styles.view}>
                    <div className={styles.top}>
                        <div className={styles.divone}>
                        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                            <label className={styles.label} for="start">Start date:</label>
                            <input
                            className={styles.input}
                            value={input.start}
                            type="date"
                            name="start"
                            min="2000-01-01"
                            max="2022-03-17"
                            onChange={(e) => handleChange(e)}
                            required></input>

                            <label className={styles.label} for="end">End date:</label>
                            <input
                            className={styles.input}
                            value={input.end}
                            type="date"
                            name="end"
                            min="2000-01-01"
                            max="2022-03-17"
                            onChange={(e) => handleChange(e)}
                            required></input>
                            
                            <button className={styles.bttn} type="submit">Submit</button>
                        </form>
                        </div>
                        <div className={styles.divtwo}>
                            <button className={styles.bttnseeall} onClick={()=>handleClick()}>See all</button>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <table summary="Cases">
                            <thead>
                                <tr>
                                    <td className={styles.head}>Date</td>
                                    <td className={styles.head}>Case ID</td>
                                    <td className={styles.head}>Phone</td>
                                    <td className={styles.head}>DNI</td>
                                    <td className={styles.head}>Group</td>
                                    <td className={styles.head}>Order</td>
                                    <td className={styles.head}>Call</td>
                                    <td className={styles.head}>Status</td>
                                    {/* <th scope="col">Date</th>
                                    <th scope="col">Case ID</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">DNI</th>
                                    <th scope="col">Group</th>
                                    <th scope="col">Order</th>
                                    <th scope="col">Call</th>
                                    <th scope="col">Status</th> */}
                                </tr>
                            </thead>
                            <tbody>
                        {
                            cases.results?.length>=1?cases.results?.map(el=>{
                                return(
                                    <tr className={styles.eachone}>
                                        {el.last_updated?<td className={styles.eachfirst}>{el.last_updated}</td>:<td>------</td>}
                                        {el.case_uuid?<td className={styles.each}>{el.case_uuid}</td>:<td>------</td>}
                                        {el.phone?<td className={styles.each}>{el.phone}</td>:<td>------</td>}
                                        {el.extra_metadata.dni?<td className={styles.each}>{el.extra_metadata.dni}</td>:<td>------</td>}
                                        {el.extra_metadata.grupo?<td className={styles.each}>{el.extra_metadata.grupo}</td>:<td>------</td>}
                                        {el.extra_metadata.orden?<td className={styles.each}>{el.extra_metadata.orden}</td>:<td>------</td>}
                                        {el.extra_metadata.case_duration?<td className={styles.each}>{el.case_duration}</td>:<td>------</td>}
                                        {el.case_result.name?<td className={styles.long}>{el.case_result.name}</td>:<td>------</td>}
                                    </tr>
                                )
                            }):<p className={styles.nothing}>Nothing to show</p>
                        }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
import { Button, Card, Checkbox, Col, Descriptions, Form, Input, Radio, Row, Space } from 'antd';
import { useEffect, useState } from 'react';

const Quiz = ({ questions }: any) => {

    const [timuindex, settimuindex] = useState<any>(0)
    const [value, setValue] = useState<any>(null);
    const [checkedList, setCheckedList] = useState<any>([]);

    const [users, setUsers] = useState<any>([])
    const [userindex, setUserindex] = useState<any>(0)
    const [userfenshu, setUserfenshu] = useState<any>([0, 0, 0, 0, 0])
    const [userdaan, setUserdaan] = useState<any>([[], [], [], [], []])

    const [timex, settimex] = useState<any>(120)
    const [fromaction, setfromaction] = useState<any>(1)

    const [fenshus, setfenshu] = useState<any>(0)
    // const [fenshuarr, setfenshuarr] = useState<any>([])

    // const [zongfen, setzongfen] = useState<any>(null)
    const [zongfen2, setzongfen2] = useState<any>(null)

    const [action, setaction] = useState(false)


    const onChange = (e: any) => {

        setValue(e.target.value);

    };

    const onChange2 = (list: any) => {
        // console.log('checked = ', list);
        setCheckedList(list);
    };

    const clearvalue = () => {
        settimuindex((prevtimu: any) => prevtimu + 1)
        setValue(null);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (fromaction == 2) {
                settimex((prevTime: any) => {
                    if (prevTime === 0) {
                        console.log('每次的分数', fenshus);

                        clearInterval(timer);
                        // 倒计时结束后的处理逻辑



                        settimuindex((prevtimu: any) => prevtimu + 1)

                        // 人次
                        if (userindex === 5) {
                            // let b = 0
                            // fenshuarr.map((i: any) => {
                            //     b = b + i
                            //     console.log('总分', b, i);
                            // })
                            console.log('真总分', fenshus, users);
                            setaction(true)

                            // setzongfen(b)
                        }

                        setfromaction(3)
                        return 120;
                    } else {
                        return prevTime - 1;
                    }
                });
            }
        }, 1000);

        // 在函数组件中返回一个清除定时器的函数，以便在组件卸载时清除定时器
        return () => {
            clearInterval(timer);
        };
    }, [fromaction])

    useEffect(() => {
        console.log('999999999999999', userdaan);



    }, [userfenshu, action])



    const onFinish = (values: any) => {
        console.log('Success:', values);

        setfenshu(0)

        users.push(values.username)
        setUsers(users)

        console.log('datirenmingcheng', users, values.username);


        setUserindex((previndex: any) => previndex + 1)

        setfromaction(2)

        // let a = timex - 1
        // settimex(a)


    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // 计算分数
    const changefenshu = () => {
        let score = 0
        const updateDaan = [...userdaan]


        if (questions[timuindex].type === 'single') {
            let xvalue

            let daan
            ['a', 'b', 'c', 'd'].map((item, index) => {

                if (questions[timuindex].answer == item) {
                    console.log(index);
                    xvalue = index
                    daan = item
                }
            })
            if (value == xvalue) {
                score++
            }

            updateDaan[userindex - 1].push({
                label: timuindex,
                value: daan
            })
            console.log('radio分数2', score);
        }

        if (questions[timuindex].type === 'trueFalse') {
            let xvalue

            if (questions[timuindex].answer == 'false') {
                xvalue = 1
            } else {
                xvalue = 0
            }

            if (value == xvalue) {
                score++
            }

            updateDaan[userindex - 1].push({
                label: timuindex,
                value: xvalue == 1 ? '错误' : '正确'
            })
            console.log('radio分数2', score);
        }


        if (questions[timuindex].type === 'multiple') {
            //  questions[timuindex].answer[value].includes
            let xvalue2: string[] = [];

            checkedList.map((item: any) => {
                switch (item) {
                    case 0:
                        xvalue2.push('a')
                        break;
                    case 1:
                        xvalue2.push('b')
                        break;
                    case 2:
                        xvalue2.push('c')
                        break;
                    case 3:
                        xvalue2.push('d')
                        break;

                    default:
                        break;
                }
            })

            let xvalue = [];

            let daanstr = ''
            xvalue2.map((item) => {
                daanstr = daanstr + item + ','
                questions[timuindex].answer.map((item2: any,) => {
                    if (item2 === item) {
                        xvalue.push(item2)
                    }
                })
            })
            if (xvalue.length > 0) {
                score++
            }



            xvalue2.map

            updateDaan[userindex - 1].push({
                label: timuindex,
                value: daanstr
            })
        }



        setfenshu((a: any) => {
            console.log('aaaaaaa', a, score, a + score);
            return a + score
        })

        const updatedFenshu = [...userfenshu];
        updatedFenshu[userindex - 1] = updatedFenshu[userindex - 1] / 1 + score / 1;
        setUserfenshu([...updatedFenshu]);

        setUserdaan([...updateDaan])


        setzongfen2((a: any) => a + score)

        console.log('radio分数', score, fenshus, updatedFenshu[userindex - 1]);
        // console.log('999999999999999', userfenshu,updatedFenshu);

        setTimeout(() => {
            clearvalue()
        }, 300)
    }


    return (
        <div>

            {fromaction == 1 ?
                <div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div style={{ display: 'flex' }}>
                            <Form.Item<any>
                                label="答题人"
                                name="username"
                                rules={[{ required: true, message: '请输入答题人姓名!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    开始答题
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>


                </div>
                :
                fromaction == 2 ? <div>
                    <h2>答题人：{users[userindex - 1]} 倒计时：{timex}秒</h2>

                    <Card title={`${timuindex + 1}. ${questions[timuindex].question}`} style={{ width: 600 }}>
                        {
                            questions[timuindex].type === 'multiple' ?
                                <Checkbox.Group style={{ width: '100%' }} onChange={onChange2}>
                                    <Row>

                                        {
                                            questions[timuindex].options.map((item: any, index: any) => {
                                                return (
                                                    <Col key={index}>
                                                        <Checkbox value={index}>{item}</Checkbox>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </Checkbox.Group>
                                :
                                <Radio.Group onChange={onChange} value={value}>
                                    <Space direction="vertical">

                                        {
                                            questions[timuindex].options.map((item: any, index: any) => {
                                                return (
                                                    <Radio value={index} key={index}>{item}</Radio>
                                                )
                                            })
                                        }
                                    </Space>
                                </Radio.Group>
                        }


                    </Card>

                    <Button onClick={changefenshu} type="primary">确定</Button>
                </div> :

                    <div style={{ display: (action) ? 'none' : 'flex' }}>
                        <h2>{users[userindex - 1]}的答题分数是：{fenshus} 分 <a onClick={() => {

                            setfromaction(1)
                        }}> 下一位</a></h2>
                    </div>

            }



            {/* {
                zongfen !== null ? <h2>总分：{zongfen2}</h2> : ''
            } */}

            {
                action ? <Descriptions title="分数展示" bordered style={{ width: 500 }} column={2}>

                    {
                        users.map((item: any, index: any) => {
                            return (

                                <Descriptions.Item label={item} labelStyle={{ fontWeight: 700 }}> <div>
                                    {userfenshu[index]} 分
                                </div>
                                    {
                                        userdaan[index].map((item2: any, index: any) => {
                                            return (
                                                <div key={index}>题目 {item2.label / 1 + 1} ： {item2.value} </div>
                                            )
                                        })
                                    }
                                </Descriptions.Item>


                            )
                        })
                    }
                    <Descriptions.Item label="总分" labelStyle={{ fontWeight: 700 }}> {zongfen2} 分</Descriptions.Item>
                </Descriptions> : null
            }
        </div>
    );
};

export default Quiz;

import React, { useState } from 'react';
import { Row } from 'simple-flexbox';

function StepArrowsComponent(props) {
        // const { graph, nodeOnClick, ...otherProps } = props;
    // const xSize = graph.length;
    // const ySize = graph[0].length;
    const imgSource = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADJCAMAAAA93N8MAAAAYFBMVEX39/dAwOf9+fiA0Ow+wecxveb09/dJw+j6+fc2vuY4vufx9ff/+/huzOp5z+vK6PJZxump3e/m8fW44vHY7fTP6vOS1u1lyuqb2e7B5fLf7/Wz4PDq8/af2u6m3O+H0+xfj5KsAAAEfUlEQVR4nO3djVbcIBAF4MVddkP8qdZWrf3x/d+yZFt1HQMZBs7mzB3uE+x3wOY2ENhsenp6enp6enp6enoKMgxr/4LVcv3rYu2fsFKGXfhytfaPWCfDIfgHm5N+ODjnb79anPQT3YVwb3DSH+lx4F825ib9f7oLh2drA/9Kj5P+7srWwL/R46S/uTRlP6G7sPtuadKf0uPA/zY06T/SnX+002sJ3QVnptdSehz4ByOP+M90M712hm6l187R48Bv9/gDP0+PvfYb/MAn6HHg4Xttku789SX2pE/T3Qj+iM/Q48A/XQBP+iwdu9fm6fER/wN20i/QkV9dLdJduH3GnPTLdBf8T8hJz6BPr64Qey2LjtlrefQ48H/gHvFcOmCvZdPduAPrtXz69OoKatKX0GOvRXp1VUTH6rVldKheW0qfei3IwBfTcXptOf24JIvwr52EDtJrRfRpSVb/I15Ij71W/asrKT0+4rX3WjF96rW6txpW0LUvydbQXRg1L8lW0Y+9Vu3AV9I1P+Jr6Yq3GlbT9b66akB340HlVsMWdKW9tg1d5ZJsI3qTV1dXZ04jeoNeu7/Znje7VvTqJdm9D+dNM/n06qqq1+59w99y9vhtRa/VTa/qtcrpNVsN1dPlvVY/3Y3CT2gA6NKthhB02ZIsBl3Ua0HokiVZGHp5r8WhFy/JAtFLtxpC0ct6LRZ92mrI7rVo9IJeC0fnf0KDR2f3WkQ6c0kWks7rtZh0Vq9FpTO2GsLSl3stLn2x1yLTY6/NvbqCpueXZMHpzj8mey06PbPVEJ6e/oTGAD3Vay3QE0uyJujTI94qPYT7z3/uJujzf+wW6IldN/j0MfVgh6enX1Oi0zMvp7Hp2SUJaHr+P+zA9BDyr2lw6YuLzrD05VeyoHTOi3hMOmtbESTdP3FWmgHp3KVWPDp7gR2O7u+4OyfB6CWbabDoRZ8GINELPwgBopdul8ShF3/8hUIPrnhrNAhd8qEnBl30eS8CXXh/DABd+smTenoQf+imnV7xeaNyes1hLarpdZ8ya6ZXHsy0D7vzpqG89tiCi/Om2YEN+u7FanVMh8IjSlodzqLwYJomdJ03H7ag+5u9uiHftKBPzXVthSj1h66pvdu2lu5f1J6tWUdXfWh6FV33UflVh6nqPkhWTld/3ZuYrvVEyfeIj8vWfwWOjK749Nj3iOgY110J6Etb/7REcA0GytV2xXTFzZWkkK66uZKU0XU3V5Ky662grqwtoKtvriR8uv7mSsK/wFB/cyVh0iGaKwmP7rcIzZWEQ4e5xuxjOBcTozRXkmU6TnMlWaIjNVeSBbrCBVR28nTeRytKk6OPTuMCKjsZOlxzJUnS5Vv/tCRFR2yuJAk6ZHMlmaVX3mKiJHN05XcycjNDV76Ays4nur6tf9JQOnJzJSF0jVv/pPlAD9jNleSUHpurmSHfnNLxmyvJG91AcyV5pWu+YViYf/QQLDRXkiPdSHMlmehWmivJcLDTXEmGnZ3mSsM+OwUvVoe8p6enp6enp6enp0eYvxThd3aUuoWbAAAAAElFTkSuQmCC"
    return (
        <Row>
            <img id='stepArrowLeft' src={imgSource} className={'img180'} onClick={() => console.log('yep')}/>
            <text>
                Step: {props.stepNumber}
            </text>
            <img id='stepArrowRight' src={imgSource} className={'img0'} onClick={() => console.log('yep')}/>
        </Row>


);

}

export default StepArrowsComponent;
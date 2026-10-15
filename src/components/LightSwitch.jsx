import { useState } from 'react';
export default function LightSwitch(){const [isOn,setIsOn]=useState(false);return <div className={`light-demo ${isOn?'light-on':''}`}><span className="light-bulb" aria-hidden="true">{isOn?'💡':'🌑'}</span><p>{isOn?'The light is on':'The light is off'}</p><button onClick={()=>setIsOn(v=>!v)}>{isOn?'Turn off':'Turn on'}</button></div>}

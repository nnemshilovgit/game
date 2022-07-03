import { useEffect, useState } from 'react';
import './App.css'
import { Config, Level } from './types';
import { clone } from 'lodash';
import { Personaj } from './components/personaj';
import { EnergyCapabilities } from './components/energy-capabilities';
import { EvasionCapabilities } from './components/evasion-capabilities';
import { SkillBlock } from './components/add-skill';
import { AppHealth } from './components/app-health';
import { AppAgility } from './components/add-agility';
import { AppCharisma } from './components/add-charisma';
import { AppIntecligy } from './components/add-intecligy';

const baseConfig: Config = {
  additationalParametrs: {
    health: 3,// 3 + здоровье
    evasion: 10, // Ловкость + 10
    energy: 1, // Присвоить значение ловкость + интеллект 
  },


  baseParametrs: {
    power: 0,
    agility: 0,
    charisma: 0,
    intecligy: 0,
  },

  skills: {
    atack: Level.NEUTRAL, // Атака
    stealth: Level.NEUTRAL, // Стелс
    archery: Level.NEUTRAL, // Стрельба из лука
    learnadility: Level.NEUTRAL, // Обучаемость
    survival: Level.NEUTRAL, // Выживание
    medicine: Level.NEUTRAL, // Медицина
    intimidation: Level.NEUTRAL, // Запугивание
    insight: Level.NEUTRAL, // Проницательность
    appearance: Level.NEUTRAL, // Внешний вид
    manipulation: Level.NEUTRAL, // Манипулирование
  },
}

const baseParametrs = [
  { name: 'Здоровье', key: 'power'},
  { name: 'Ловкость', key: 'agility'},
  { name: 'Харизма', key: 'charisma'},
  { name: 'Интеллект', key: 'intecligy'},
];

const skills = [
  {name: 'Атака', key: 'atack'},
  {name: 'Стелс', key: 'stealth'},
  {name: 'Стрельба из лука', key: 'archery'},
  {name: 'Обучаемость', key: 'learnadility'},
  {name: 'Выживание', key: 'survival'},
  {name: 'Медицина', key: 'medicine'},
  {name: 'Запугивание', key: 'intimidation'},
  {name: 'Проницательность', key: 'insight'},
  {name: 'Внешний вид', key: 'appearance'},
  {name: 'Манипулирование', key: 'manipulation'},
];

function App() {


  const [config, setConfig] = useState<Config>(baseConfig);


  const upSkill = (key:string) => {
    const skillLevel = config.skills[key]
    const baseParametrLevel = getBaseParametrBySkillKey(key)
    if( skillLevel <= baseParametrLevel){
      return
    }
    config.skills[key] +=1;
    setConfig(clone(config));
  }

  const getBaseParametrBySkillKey = (key: string) => {
    const obj = {atack: 'power', stealth: 'agility', archery: 'agility', learnadility: 'intecligy', survival: 'intecligy', medicine: 'intecligy', intimidation: 'charisma', insight: 'charisma', appearance: 'charisma', manipulation: 'charisma'}
    config.skills[obj[key]]+= 1;
    return config.baseParametrs[obj[key]]
  }


  const damage = () => {
    if (config.additationalParametrs?.health > 0){
      config.additationalParametrs.health -= 1;
    }setConfig(clone(config));
  };

  const withdrawalEvasion = () => {
    if (config.baseParametrs.agility += 1){
    config.additationalParametrs.evasion += 1;}
    setConfig(clone(config));
  };

  const withdrawalEnergy = () => {
    if (config.additationalParametrs?.energy > 0){
    config.additationalParametrs.energy += 1;
    setConfig(clone(config));
    }
  };

  const withdrawalAgility = () => {
    config.baseParametrs.agility += 1
      setConfig(clone(config));
  };

  const withdrawalCharisma = () => {
    config.baseParametrs.charisma += 1
      setConfig(clone(config));
  };

  const withdrawalIntecligy = () => {
    config.baseParametrs.intecligy += 1
      setConfig(clone(config));
  };

  const withdrawalHealth = () => {
    if (config.baseParametrs.power += 1){
      config.additationalParametrs.health += 1;}
      setConfig(clone(config));
  };

  


  return (
    <div className='workspace'>



    <div className='capabilities'>
      <Personaj damage={damage} />
      <div style={{margin: '7px'}}> Здоровье: {config.additationalParametrs.health}</div>
     
      <EnergyCapabilities withdrawalEnergy={withdrawalEnergy}/>
      <div style={{margin: '7px'}}> Энергичность: {config.additationalParametrs.energy}</div>

      <EvasionCapabilities  withdrawalEvasion={withdrawalEvasion}/>
      <div style={{margin: '7px'}}> Уклонение: {config.additationalParametrs.evasion}</div>
    </div>



    <div className='add-setting'>
      <div style={{margin: '14px'}}> Здоровье: {config.baseParametrs.power}</div>
      <AppHealth  withdrawalHealth={withdrawalHealth}/>
      
      <div style={{margin: '14px'}}> Ловкость: {config.baseParametrs.agility}</div>
      <AppAgility  withdrawalAgility={withdrawalAgility}/>

      <div style={{margin: '14px'}}> Харизма: {config.baseParametrs.charisma}</div>
      <AppCharisma  withdrawalCharisma={withdrawalCharisma}/>

      <div style={{margin: '14px'}}> Интеллект: {config.baseParametrs.intecligy}</div>
      <AppIntecligy  withdrawalIntecligy={withdrawalIntecligy}/>
    </div>
    



        <div className="add-skill">
        {skills.map((item, index) => (
          <SkillBlock
          key={index}
          nameSkill={item.name}
          keyNameSkill={item.key}
          upSkill={upSkill}
          level={config.skills[item.key]}/>
        ))}
        </div>
      </div>
  );
}


export default App;
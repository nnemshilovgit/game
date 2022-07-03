export type Config = {
    baseParametrs: BaseParametrs;
    additationalParametrs: AdditationalParametrs;
    skills: Skills;
};

export type BaseParametrs = {
    power: number;
    agility: number;
    intecligy: number;
    charisma: number;
};

export type AdditationalParametrs = {
    health: number;
    evasion: number;
    energy: number;
};

export type Skills = {
    atack: Level; // Атака
    stealth: Level; // Стелс
    archery: Level; // Стрельба из лука
    learnadility: Level; // Обучаемость
    survival: Level; // Выживание
    medicine: Level; // Медицина
    intimidation: Level; // Запугивание
    insight: Level; // Проницательность
    appearance: Level; // Внешний вид
    manipulation: Level; // Манипулирование

};

export enum Level {
    NEUTRAL, // Нетренированный
    NEW, // Новичок
    STUDENT, // Ученик
    ADEPT, // Адепт
    EXPERT, // Эксперт
    MASTER //Мастер
}
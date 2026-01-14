import React from "react";
import { BrainCircuit, Gamepad2, Cpu, Bot, Puzzle, Globe } from "lucide-react";

export type CourseCategory = "programming" | "robotics";
export type CourseFormat = "online" | "offline";

export interface Course {
  title: string;
  age: string;
  modules: number;
  icon: React.ReactNode;
  modulesList: string[];
  outcomes: string[];
  category: CourseCategory;
  format: CourseFormat;
}

/* ======================
   ИКОНКИ
====================== */
const CourseIcons = {
  // programming
  digitalThinking: <BrainCircuit className="text-[#00B18F]" size={48} />,
  gameDev: <Gamepad2 className="text-[#00B18F]" size={48} />,
  webDev: <Globe className="text-[#00B18F]" size={48} />,

  // robotics
  roboticsBasic: <Puzzle className="text-[#00B18F]" size={48} />,
  roboticsAdvanced: <Bot className="text-[#00B18F]" size={48} />,
  iot: <Cpu className="text-[#00B18F]" size={48} />,
};

/* ======================
   ВСЕ КУРСЫ
====================== */
export const COURSES: Course[] = [
  /* ---------- ROBOTICS | OFFLINE ---------- */

  {
    title: "Junior: “Букварь изобретателя”",
    age: "5–7 лет",
    modules: 12,
    icon: CourseIcons.roboticsBasic,
    modulesList: [
      "Введение в робототехнику",
      "Создание анимаций в Robbo Junior",
      "3D ручка",
      "Конструирование",
      "LEGO WeDo 2.0",
      "RobboScratch",
      "Робоплатформа",
      "Робот Отто",
      "Схемотехника",
      "3D моделирование Tinker",
      "Лаборатория",
      "Итоговые проекты",
    ],
    outcomes: ["Первые инженерные навыки", "Визуальное программирование"],
    category: "robotics",
    format: "offline",
  },

  {
    title: "Middle: “Справочник инженера”",
    age: "7–11 лет",
    modules: 12,
    icon: CourseIcons.roboticsAdvanced,
    modulesList: [
      "Основы программирования",
      "РоббоЛаборатория",
      "РоббоПлатформа",
      "Основы физики",
      "Основы схемотехники",
      "3D-моделирование",
      "Создание игр",
      "Геометрия",
      "SketchUp",
      "3D печать",
      "VR-технологии",
      "Итоговые проекты",
    ],
    outcomes: ["Системное инженерное мышление", "Проектная деятельность"],
    category: "robotics",
    format: "offline",
  },

  {
    title: "Senior: “Мануал архитектора”",
    age: "12–15 лет",
    modules: 12,
    icon: CourseIcons.iot,
    modulesList: [
      "Python",
      "Arduino Uno",
      "Пайка",
      "3D печать",
      "Умный дом",
      "ИИ в робототехнике",
      "VR-игры",
      "Итоговые проекты",
    ],
    outcomes: [
      "Глубокое погружение в инженерные технологии",
      "Работа с физикой и электроникой",
    ],
    category: "robotics",
    format: "offline",
  },

  /* ---------- PROGRAMMING | OFFLINE ---------- */

  {
    title: "Junior: “Компьютерная азбука”",
    age: "5–7 лет",
    modules: 8,
    icon: CourseIcons.digitalThinking,
    modulesList: [
      "Rodocodo",
      "Scratch Jr",
      "Kodu Game Lab",
      "Aseprite",
      "Code Monkey",
      "Scratch",
      "PowerPoint",
      "Run Marco",
    ],
    outcomes: ["Развитие логики", "Основы работы за ПК"],
    category: "programming",
    format: "offline",
  },

  {
    title: "Middle: “Учебник программиста”",
    age: "8–11 лет",
    modules: 7,
    icon: CourseIcons.gameDev,
    modulesList: [
      "Kodu Game Lab",
      "Aseprite",
      "Scratch",
      "PowerPoint",
      "Construct 2",
      "Google Blockly",
      "Minecraft Education",
    ],
    outcomes: ["Создание игр", "Базовые навыки программирования"],
    category: "programming",
    format: "offline",
  },

  {
    title: "Senior: “Энциклопедия разработчика”",
    age: "12–15 лет",
    modules: 6,
    icon: CourseIcons.webDev,
    modulesList: [
      "Construct 2",
      "Roblox Studio",
      "Office",
      "Thunkable",
      "Tinkercad",
      "Godot",
    ],
    outcomes: ["Проектная работа", "Портфолио"],
    category: "programming",
    format: "offline",
  },

  /* ---------- PROGRAMMING | ONLINE ---------- */

  {
    title: "Middle: “Учебник программиста”",
    age: "8–11 лет",
    modules: 7,
    icon: CourseIcons.gameDev,
    modulesList: [
      "Kodu Game Lab",
      "Aseprite",
      "Scratch",
      "PowerPoint",
      "Construct 2",
      "Google Blockly",
      "Minecraft Education",
    ],
    outcomes: ["Онлайн-проекты", "Алгоритмическое мышление"],
    category: "programming",
    format: "online",
  },

  {
    title: "Senior: “Энциклопедия разработчика”",
    age: "12–15 лет",
    modules: 6,
    icon: CourseIcons.webDev,
    modulesList: [
      "Construct 2",
      "Roblox Studio",
      "Office",
      "Thunkable",
      "Tinkercad",
      "Godot",
    ],
    outcomes: ["Онлайн-портфолио", "Проектная деятельность"],
    category: "programming",
    format: "online",
  },
];

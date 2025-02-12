'use client';

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Head from "next/head";

export default function Home() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme]);

  useEffect(() => {
    const handleStorageChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    setTheme( prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const SKILLS = ['JavaScript', 'React.js', 'Next.js', 'React Native', 'Python', 'Django', 'Flask', 'Docker', 'PostgreSQL', 'Git'];

  const PROJECTS = [{
    title: 'Projeto 1',
    description: '',
    url: '',
  }];

  const CONTACTS = [{
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yaleluck',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/yaleluck',
  }];

  return (
    <>
      <Head>
        <title>Yale Luck Nunes</title>
      </Head>
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      >
        {/* Toggle DarkMode */}
        {/* <button
          className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition-all"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button> */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition-all"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </motion.button>
        {/* Header */}
        <motion.header 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* <h1 className="text-4xl font-bold text-primary dark:text-white">Yale Luck Nunes</h1> */}
          <h1
            className="text-4xl font-bold text-primary dark:text-white"
          >
            Yale Luck Nunes
          </h1>
          <p className="text-secondary dark:text-gray-300">Desenvolvedor Full Stack Jr | Engenheiro de Software Jr</p>
        </motion.header>

        {/* About me */}
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-center"
        >
            <p className="text-body dark:text-gray-400">
              Estudante de Engenharia de Software e Estagiário em Desenvolvimento na Polibras Software. Busco oportunidades para crescer melhorar minhas habilidades como Desenvolvedor Full Stack.
            </p>
        </motion.section>

        {/* Skills */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6"
        >
            <h2 className="text-2xl font-semibold text-primary dark:text-white">Habilidades</h2>
            <div className="flex flex-wrap justify-center mt-3 gap-4">
              {SKILLS.map( skill => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="px-4 py-2 rounded-lg shadow-md bg-surface dark:bg-gray-700 text-onSurface dark:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-center"
        >
            <h2 className="text-2xl font-semibold text-primary dark:text-white">Projetos</h2>
            <p className="text-body dark:text-gray-400">Em breve, novos projetos estarão aqui.</p>
            {/* <ul className="mt-3 space-y-3">
              {PROJECTS.map( project => (
                <li key={project}>
                  <a className="text-blue-300" href={project.url} target="_blank" rel="noopener noreferrer">
                    🔗 {project.title}
                  </a>
                </li>
              ))}
            </ul> */}
        </motion.section>

        {/* Contact */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 text-center"
        >
          <h2 className="text-2xl font-semibold text-primary dark:text-white">Contato</h2>
          <p className="text-body dark:text-gray-400">📩 yaleluck@gmail.com</p>
          <div className="flex gap-4 justify-center mt-3">
            {CONTACTS.map( (contact, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-link dark:text-blue-300 hover:underline"
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.title}
              </motion.a>
            ))}
          </div>

          <div className="mt-6">
            <motion.a
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              // transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 0.8 }}
              className="mt-6 px-6 py-3 rounded-lg shadow-md bg-button dark:bg-gray-600 text-onButton dark:text-white transition-all"
              href="/curriculum.pdf"
              download
            >
              📄 Baixar Currículo
            </motion.a>
          </div>
        </motion.section>
      </motion.main>
    </>
  )
}
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'

import styles from './App.module.css'

const posts = [
  {
    id: 1,

    author: {
      avatarUrl: 'https://github.com/thiagostudier.png',
      name: 'Thiago Studier',
      role: 'CTO @ Rocketseat'
    },

    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat.' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],

    publishedAt: new Date('2023-10-05 20:00:00')
  },

  {
    id: 2,

    author: {
      avatarUrl: 'https://github.com/thiagostudier.png',
      name: 'Thiago Studier',
      role: 'CTO @ Rocketseat'
    },

    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat.' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],

    publishedAt: new Date('2023-10-13 20:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App

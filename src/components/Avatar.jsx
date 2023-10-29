import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
  return (
    <img 
      className={hasBorder ? styles['avatar__with-border'] : styles.avatar} 
      src={src}
    />
  )
}
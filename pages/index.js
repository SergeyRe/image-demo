import styles from '../styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ViewSource from '../components/view-source'

const Code = (p) => <code className={styles.inlineCode} {...p} />
 const myLoader = ({ src, width, quality }) => {
  return `${src}?w=150&q=75`
}

const Index = () => (
 
  
  
  <div >
 
  <div className="offerimg">
                                     
      
   <Image
                                    
                                        src="https://avatars.mds.yandex.net/get-mpic/1522540/img_id8376300389632234122.jpeg/orig"
                                       loader={myLoader}
                                        layout="fill"
                                        loading="eager"
                                        priority={true}
                                        objectFit="scale-down"
                                      />
                                    </div>
  <div className="offerimg">
                                     
      
   <Image
                                    
                                        src="https://avatars.mds.yandex.net/get-mpic/1522540/img_id8376300389632234122.jpeg/orig"
                                     
                                        layout="fill"
                                        loading="eager"
                                        priority={true}
                                        objectFit="scale-down"
                                      />
                                    </div>
  </div>
)

export default Index

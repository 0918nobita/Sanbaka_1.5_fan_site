import React from 'react';
import IconButton from '../../parts/icon_button';
import styles from '../window_layout.module.scss';

const InuiWindow = () => {
  const MoveToYoutube = () => {
    window.open("https://www.youtube.com/channel/UCXRlIK3Cw_TJIQC5kSJJQMg?sub_confirmation=1", "_blank")
  }

  const MoveToTwitter = () => {
    window.open("https://twitter.com/inui_toko", "_blank")
  }
  return (
    <>
      <div className={`${styles.root} ${styles.color_inui}`}>
        <div className={styles.main} >
          <h3 className={`${styles.subtitle} ${styles.right}`}>公式つよつよケルベロス</h3>
          <h2 className={`${styles.title} ${styles.right}`}>戌亥とこ</h2>
          <p className={`${styles.content} ${styles.right}`}>
            寂れた和風喫茶で働く女の子. <br/>
            店長の趣味でメイド服を着せられている.<br/>
            足下に見え隠れする尻尾が本物かどうかは<br/>
            触れた人のみぞ知る.<br/>
            満月の夜は何か不思議な事が起きるらしい？
          </p>
          <div className={`${styles.flex_row} ${styles.right_component} ${styles.margin_top}`}>
            <IconButton handleClick={() => MoveToYoutube()} link={`${window.location.origin}/image/youtube.png`} />
            <IconButton handleClick={() => MoveToTwitter()} link={`${window.location.origin}/image/twitter.png`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InuiWindow;
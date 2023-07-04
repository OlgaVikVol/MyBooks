import style from './App.module.css';



function App() {
  return (

    <div className={style.container}>
      <div className={style.parent}>
        <h1>1. FLEX-WRAP</h1>
        <div className={style.cluster}>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Lorem</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Quis</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Vitae</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Fugiat</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Aliquam</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Aliquam</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Iusto</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Repellendus</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Molestiae</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Conswiroe</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Quam</div>
        </div>

        <h1>2. GRID</h1>
        <div className={style.autoGrid}>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Lorem</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Quis</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Vitae</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Fugiat</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Aliquam</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Aliquam</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Iusto</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Repellendus</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Molestiae</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Conswiroe</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Quam</div>
        </div>

        <h1>3. FLEXIBLE-GRID</h1>
        <div className={style.flexibleGrid}>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Lorem</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Quis</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Vitae</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Fugiat</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Aliquam</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Aliquam</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Iusto</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Repellendus</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Molestiae</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Conswiroe</div>
          <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Quam</div>
        </div>

        <h1>4. REEL </h1>
        <div className={style.reelContainer}>
          <div className={style.reel}>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Lorem</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Quis</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Vitae</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Fugiat</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Aliquam</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Aliquam</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Iusto</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Repellendus</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Molestiae</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Conswiroe</div>
            <div style={{ textAlign: 'center', background: 'purple', color: 'white', padding: "6px" }}>Quam</div>
          </div>
        </div>

        <h1>5. SIDEBAR</h1>
        <div className={style.sidebarParent}>
          <div className={style.chindren}>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, assumenda.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae quod modi fugit laudantium. Commodi, adipisci. Neque quibusdam est fugiat corrupti corporis sed magnam! Esse.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia tempore consectetur, nam voluptatem enim ut ipsam tempora excepturi laudantium debitis, pariatur expedita labore libero harum voluptas. Fuga ducimus expedita quos explicabo. Perferendis sequi fugit aliquam dignissimos, tenetur ipsum, assumenda ducimus qui dolores tempore harum debitis, ad nesciunt laboriosam nobis velit deleniti perspiciatis cumque! Aut dicta ab suscipit nisi quam!</p>
          </div>
          <div className={style.chindren}>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, assumenda.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae quod modi fugit laudantium. Commodi, adipisci. Neque quibusdam est fugiat corrupti corporis sed magnam! Esse.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

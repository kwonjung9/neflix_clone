const Banner = () => {
  return (
    <section className="banner">
      <img src={`${process.env.PUBLIC_URL}/images/popcorn.png`} alt="배너 이미지"/> 
      <div className="banner-text">           
          <div>
          <p>5,500원이면 만날 수 있는 넷플릭스</p>
          <p>가장 경제적인 광고형 멤버쉽을 이용해 보세요.</p>
        </div>
        <button>자세히 알아보기</button>
      </div>
    </section>
  );
};

export default Banner;
import boxB from '../img/box-b.png'
import boxC from '../img/box-c.png'
import boxD from '../img/box-d.png'
import boxE from '../img/box-e.jpg'
import boxF1 from '../img/box-f1.jpg'
import boxF2 from '../img/box-f2.jpg'

const ShowcaseBox2 = () => {
    return (
      <>
        <section className="box box-a bg-primary text-center py-md">
          <div className="box-inner">
            <h2 className="text-xl">Jingle all the way to free favorites</h2>
            <p className="text-md">
              Join Starbucks® Rewards for delicious deals & exclusive offers.{" "}
              <a className="link-btn" href="/">
                Learn more
              </a>
            </p>
          </div>
        </section>
        <section className="box box-b bg-secondry grid-col-2 py-md">
          <img src={boxB} alt="" />
          <div className="box-text">
            <h2 className="text-xl">New to the nice list</h2>
            <p className="text-md">
              For a nondairy twist on a holiday cookie classic, try the new Iced
              Sugar Cookie Almondmilk Latte.
            </p>
            <a href="" className="btn-cards ">
              Order Now
            </a>
          </div>
        </section>
        <section className="box box-c bg-secondry grid-col-2 grid-reversed">
          <img src={boxC} alt="" />
          <div className="box-text">
            <h2 className="text-xl">Merry moment</h2>
            <p className="text-md">
              Treat yourself to a festive Sugar Plum Cheese Danish with a nicely
              spiced sugar-plum spread.
            </p>
            <a href="#" className="btn-cards">
              Order Now
            </a>
          </div>
        </section>
        <section className="box box-d bg-primary grid-col-2">
          <img src={boxD} alt="" />
          <div className="box-text">
            <h2 className="text-xl">Starbucks Thanksgiving Blend</h2>
            <p className="text-md">
              This elegant dark roast returns, showcasing flavors from some of
              the world’s major coffee-growing regions.
            </p>
            <a href="#" className="btn-cards">
              Order Now
            </a>
          </div>
        </section>
        <section className="box box-e bg-secondry grid-col-2 grid-reversed">
          <img src={boxE} alt="" />
          <div className="box-text">
            <h2 className="text-md">Fighting hunger this holiday</h2>
            <p className="text-sm">
              Hunger is affecting millions of people across America this holiday
              season. Join us in our commitment to hunger relief and help feed
              neighbors in need.
            </p>
            <a href="#" className="btn-cards">
              Order Now
            </a>
          </div>
        </section>
        <section className="box box-f grid-col-2">
          <div>
            <img src={boxF1} alt="" />
            <div className="bg-extra py-lg">
              <div className="box-text">
                <h2 className="text-md">Let the holiday cheer come to you</h2>
                <p className="text-sm">
                  Make the moment merry. Order Starbucks® holiday favorites on
                  Uber Eats.*
                </p>
                <a href="#" className="btn-cards-darken">
                  Order Now
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={boxF2} alt="" />
            <div className="bg-primary py-lg">
              <div className="box-text">
                <h2 className="text-md">Loved Passing on Netflix?</h2>
                <p className="text-sm">
                  Our new social series about film adaptations kicks off with
                  the actors and directors who brought the book to life.
                </p>
                <a href="#" className="btn-cards">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default ShowcaseBox2

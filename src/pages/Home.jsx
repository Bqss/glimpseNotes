import { useNavigate } from "react-router-dom";
import {Button} from "./../components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-xl mx-auto">
      <header>
        <div className="flex flex-1 items-center gap-1 px-12 py-10 mb-6">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ3SURBVHgBnZTdahNBFMfPmVlLKEE3FK/qx0YQvGrjjZfS+AQRWluK4PYJEl+gH0/QPkGbXBmKiH0CkwtvRHS91YtsoSB+UINIWcrOHM/M7Mao+UAPhN3snPObc/5nziCMsZrf8y+k/iIoqJCEEmgNgNAH1FHq/Yie98v9YX/8E7DmfwzS1KsjipAIfQDKHJHfzDvaB4FukZLbz5LS8V+g5YtfGhywSUQlzFYYZkloSAZFQ1nYL7D99PvlnQFo2f+0BYRbvG+OyDzp9/3QLZm0MPugUG/Y9xX/JAQQ+xyIeSnOh5pSi1YCEBf4rwDpn0O6JBDq7BW4rKh1eDofWtCDuZMebxxkCRA/jwXSRvvr1Q6MMKOjlnqXnePD0yuPLXBlrhciygOXsNNBgKiOg4wzj6MeASrIi2faUfvz9Q78o3lCqrLrBFptkXQH/sM8jrzmJCabEXoYTQtan39f0UpVEASZWs6TsyMGKZOK7bk9chouTQNpUjWSYtP2hcspFAtVwaDYaIRCMY35QgfTQKwrE1JOSHOcE0agVF0DcTBewLQ2HZSChaAmkJqLSRgk4MCRs5+kpdXgbWMyyAywpjwBVhrEk3ihy+QIXFn2x4dxd/XG6/qEjDD3NUADsif7YfnNohJ6VLdiznKPxX2X6RCQwrvc5fvcXz934rmuDqZx7earkOd830w5uYnM7w07+fkVgtk9gkODzBtx1zJrf7jTlKDugVAxsoC/NFM40NAeFaONKclIob7xcydJCxGOkmD91kueZmrw1C3A4Fqx94othNc6nFN3Jpnda8a37U2JMMFqwQu/WPQqwN02gmot+jNns3EePGw/AbNFF5KFavoXAAAAAElFTkSuQmCC"
            alt="main logo"
            className="w-6 h-6"
          />
          <span className="text-2xl text-slate-700 font-extrabold">
            Limpse Notes
          </span>
        </div>
      </header>
      <main>
        <section className="flex gap-4 flex-col md:flex-row-reverse px-12 items-center"> 
          <div className="flex-1">
            <img src="https://glimpse-notes.netlify.app/static/media/homePageGif.8da350d6f4884a03e72a.gif" alt="ilustration1" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold ">One Stop Solution for all your Notes</h2>
            <p className="mt-5 text-lg md:text-xl font-semibold text-gray-500">Glimpse Notes helps you to create organise and save your notes effortlessly across all platforms.</p>
            <Button className="mt-8 " onClick={() => navigate("./notes")}>Get Started</Button>
          </div>
        </section>
      </main>
    </div>
  );
};


export default Home;
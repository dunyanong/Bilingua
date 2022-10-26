import './App.css';
import { useTranslation } from 'react-i18next';

const lngs = [
  { code: "en", native: "English" },
  { code: "cn", native: "Chinese" },
];

function App() {
  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div style={{padding: '50px'}}>
      <h1>{t("welcome")}</h1>

      {lngs.map((lng, i) => {
        const { code, native } = lng;
        return <button onClick={() => handleTrans(code)}>{native}</button>;
      })}

    </div>
    )
}

export default App;

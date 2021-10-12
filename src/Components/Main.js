import React, { useState } from 'react';

const Main = () => {

  const seasonsJson = require('../data/1950s.json');
  const pointsJson = require('../data/pointschemes.json');
  const allResultsJson = require('../data/AllResults.json');
  const [selectedYear, setSelectedYear] = useState(1950);
  const [selectedSeason, setSelectedSeason] = useState(allResultsJson.filter(x => x.Season == 1950));
  const years = allResultsJson.map(data => data.Season);
  const [races, setRaces] = useState([]);
  const pointsSchemes = pointsJson.map(scheme => scheme.label);

  const handleYearChange= (e) => {
    console.log(e.target.value)
    setSelectedYear(e.target.value);

    const selectedSeason = allResultsJson.filter(x => x.Season == e.target.value);
    console.log(selectedSeason)

    setSelectedSeason(selectedSeason);
    var races = selectedSeason.map(season => season.Races)
    setRaces(races);
  }

  const handlePointsChange= () => {
   
  }

  return (
    <div className="home">
      <div className="select-year">
        <label htmlFor="years">Choose a year: </label>
        <select value={selectedYear} onChange={handleYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>)
          )}
        </select>
      </div>

      <div className="select-points-scheme">
        <label htmlFor="years">Choose a points scheme: </label>
        <select onChange={handlePointsChange}>
          {pointsSchemes.map((scheme) => (
            <option key={scheme} value={scheme}>{scheme}</option>)
          )}  
        </select>
      </div>
      <div className="generate-button">
        <button>Generate Results</button>
      </div>
    </div>
  );
}

export default Main;
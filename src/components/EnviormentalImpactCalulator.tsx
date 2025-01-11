import React, { useState } from 'react';

const EnvironmentalImpactCalculator: React.FC = () => {
  const [fleetSize, setFleetSize] = useState<number | ''>('');
  const [farmAcreage, setFarmAcreage] = useState<number | ''>('');
  const [results, setResults] = useState<{
    emissionReduction: string;
    energyReduction: string;
    operationalCostReduction: string;
  } | null>(null);

  const calculateImpact = () => {
    if (!fleetSize || !farmAcreage) {
      alert('Please enter valid numbers for both fields.');
      return;
    }

    // Example assumptions:
    const emissionPerAcre = 10; // kg CO2 per acre annually for traditional methods
    const energyPerAcre = 15; // kWh per acre annually for traditional methods
    const costReduction = 0.3; // 30% cost reduction

    const traditionalEmissions = farmAcreage * emissionPerAcre; // Annual emissions for traditional methods
    const evionEmissions = traditionalEmissions * 0.2; // Reduced emissions with Evion drones
    const emissionReduction = traditionalEmissions - evionEmissions;

    const traditionalEnergy = farmAcreage * energyPerAcre; // Annual energy consumption for traditional methods
    const evionEnergy = traditionalEnergy * 0.2; // Reduced energy with Evion drones
    const energyReduction = traditionalEnergy - evionEnergy;

    const operationalCostReduction = costReduction * 100; // % operational cost reduction

    // Set the calculated results
    setResults({
      emissionReduction: emissionReduction.toFixed(2),
      energyReduction: energyReduction.toFixed(2),
      operationalCostReduction: operationalCostReduction.toFixed(2),
    });
  };

  return (
    <div className="mt-24">
      <h3 className="text-3xl font-semibold mb-8 text-center text-white">
        Environmental Impact Calculator
      </h3>
      <div className="bg-gray-800 p-8 rounded-lg">
        <p className="text-gray-300 mb-4">
          Estimate the environmental impact of switching to Evion drones:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="fleet-size"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Current Fleet Size
            </label>
            <input
              type="number"
              id="fleet-size"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter number of drones"
              value={fleetSize === '' ? '' : fleetSize}
              onChange={(e) => setFleetSize(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <label
              htmlFor="farm-acreage"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Farm Acreage
            </label>
            <input
              type="number"
              id="farm-acreage"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter acreage"
              value={farmAcreage === '' ? '' : farmAcreage}
              onChange={(e) => setFarmAcreage(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
            />
          </div>
        </div>
        <button
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={calculateImpact}
        >
          Calculate Impact
        </button>
        {results && (
          <div className="mt-6 p-4 bg-gray-700 rounded-md">
            <p className="text-white">Estimated annual reduction:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Carbon emissions: {results.emissionReduction} tons</li>
              <li>Energy consumption: {results.energyReduction} kWh</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnvironmentalImpactCalculator;

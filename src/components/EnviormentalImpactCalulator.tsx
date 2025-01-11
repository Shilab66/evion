import React, { useState } from 'react';

const EnvironmentalImpactCalculator: React.FC = () => {
  const [fleetSize, setFleetSize] = useState<number | ''>('');
  const [results, setResults] = useState<{
    emissionReduction: string;
    energyReduction: string;
    operationalCostReduction: string;
  } | null>(null);

  const calculateImpact = () => {
    if (!fleetSize) {
      alert('Please enter a valid number for the fleet size.');
      return;
    }

    // Feudal average operation hours per day
    const feudalAverageHours = 6; // 6 hours/day

    // Example assumptions:
    const emissionPerHour = 0.5; // kg CO2
    const energyPerHour = 1; // kWh
    const costReduction = 0.2; // 20% cost reduction

    const totalHours = fleetSize * feudalAverageHours * 365; // Total operation hours in a year
    const traditionalEmissions = totalHours * emissionPerHour; // Annual emissions for traditional drones
    const evionEmissions = traditionalEmissions * 0.2; // Reduced emissions with Evion drones
    const emissionReduction = traditionalEmissions - evionEmissions;

    const traditionalEnergy = totalHours * energyPerHour; // Annual energy consumption for traditional drones
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

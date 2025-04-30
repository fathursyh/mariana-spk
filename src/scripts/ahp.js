function normalize(matrix) {
    const columnSums = matrix[0].map((_, colIndex) => matrix.reduce((sum, row) => sum + row[colIndex], 0));
    return matrix.map((row) => row.map((value, colIndex) => value / columnSums[colIndex]));
}

function calculatePriorityVector(normalizedMatrix) {
    return normalizedMatrix.map((row) => {
        const sum = row.reduce((acc, val) => acc + val, 0);
        return sum / row.length;
    });
}

// Matriks input
const criteriaMatrix = [
    [1, 3, 5, 7, 9],
    [1 / 3, 1, 3, 5, 7],
    [1 / 5, 1 / 3, 1, 3, 5],
    [1 / 7, 1 / 5, 1 / 3, 1, 3],
    [1 / 9, 1 / 7, 1 / 5, 1 / 3, 1],
];

const compressiveStrengthMatrix = [
    [1, 3, 5, 7, 9],
    [1 / 3, 1, 3, 5, 7],
    [1 / 5, 1 / 3, 1, 3, 5],
    [1 / 7, 1 / 5, 1 / 3, 1, 3],
    [1 / 9, 1 / 7, 1 / 5, 1 / 3, 1],
];

const densityMatrix = [
    [1, 3, 5, 3, 5],
    [1 / 3, 1, 3, 1, 3],
    [1 / 5, 1 / 3, 1, 1 / 3, 1 / 3],
    [1 / 3, 1, 3, 1, 2],
    [1 / 5, 1 / 3, 3, 1 / 2, 1],
];

const fabricabilityMatrix = [
    [1, 1 / 5, 1 / 3, 1 / 2, 1 / 3],
    [5, 1, 3, 5, 7],
    [3, 1 / 3, 1, 3, 5],
    [2, 1 / 5, 1 / 3, 1, 3],
    [3, 1 / 7, 1 / 5, 1 / 3, 1],
];

const corrosionResistanceMatrix = [
    [1, 7, 3, 5, 9],
    [1 / 7, 1, 1 / 3, 1, 3],
    [1 / 3, 3, 1, 3, 7],
    [1 / 5, 1 / 3, 1 / 3, 1, 3],
    [1 / 9, 1 / 5, 1 / 7, 1 / 3, 1],
];

const costMatrix = [
    [1, 1/5, 1/3, 1/3, 1 / 5],
    [5, 1, 1 / 3, 1 / 7, 1 / 9],
    [3, 3, 1, 1, 1 / 3],
    [3, 7, 3, 1, 1 / 5],
    [5, 9, 3, 5, 1],
];

function runAHPWithSelectedAlternatives(criteriaMatrix, alternativeMatrices, selectedIndices, alternativesLabels) {

    const normalizedCriteriaMatrix = normalize(criteriaMatrix);
    const criteriaWeights = calculatePriorityVector(normalizedCriteriaMatrix);

    const filteredAlternativeWeights = alternativeMatrices.map((matrix) => {
        const normalized = normalize(matrix);
        const priorityVector = calculatePriorityVector(normalized);
        // Filter berdasarkan index alternatif yang dipilih
        return selectedIndices.map((i) => priorityVector[i]);
    });

    // Menghitung skor akhir hanya untuk alternatif yang dipilih
    const finalScores = selectedIndices.map((_, altIdx) => {
        return filteredAlternativeWeights.reduce((sum, weights, critIdx) => sum + weights[altIdx] * criteriaWeights[critIdx], 0);
    });

    // Buat daftar ranking
    const ranked = selectedIndices.map((index, i) => ({
        name: alternativesLabels[index],
        score: finalScores[i],
    }));
    // Urutkan berdasarkan skor tertinggi
    ranked.sort((a, b) => b.score - a.score);
    // === Step 4: Cari pemenang dari tiap kriteria (semua alternatif) ===
    const winnersPerCriterion = filteredAlternativeWeights.map((weights, critIdx) => {
        const maxIndex = weights.indexOf(Math.max(...weights));
        return {
            winner: maxIndex,
            score: weights[maxIndex]
        };
    });
    return { ranked, winnersPerCriterion };
}

const alternatives = ["Titanium", "Ferrum", "Carbon", "Aluminium", "Nickel"];

const alternativeMatrices = [compressiveStrengthMatrix, corrosionResistanceMatrix, densityMatrix, costMatrix, fabricabilityMatrix];


export const getRankings = (input) => {
    let pilihan = [];
    input.forEach((item) => {
        pilihan.push(alternatives.findIndex((value) => value === item));
    });
    return runAHPWithSelectedAlternatives(criteriaMatrix, alternativeMatrices, pilihan, alternatives);
};


const getWinner = (criteriaMatrix, alternativeMatrices, selectedIndices, alternativesLabels) => {

    const normalizedCriteriaMatrix = normalize(criteriaMatrix);
    const criteriaWeights = calculatePriorityVector(normalizedCriteriaMatrix);

    const filteredAlternativeWeights = alternativeMatrices.map((matrix) => {
        const normalized = normalize(matrix);
        const priorityVector = calculatePriorityVector(normalized);
        return selectedIndices.map((i) => priorityVector[i]);
    });
    return filteredAlternativeWeights;
}
export const getChartData = () => {
    return getWinner(criteriaMatrix, alternativeMatrices, [0, 1, 2, 3, 4], alternatives);
}
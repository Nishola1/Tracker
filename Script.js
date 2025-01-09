let totalPoints = 0;

function addPoints(points) {
    totalPoints += points;
    document.getElementById('total-points').innerText = `Total Points: ${totalPoints}`;
    updateProgress();
}

function updateProgress() {
    const progress = document.getElementById('progress');
    const percentage = (totalPoints / 100) * 100; // Assuming 100 points is the goal
    progress.style.width = `${percentage}%`;
}

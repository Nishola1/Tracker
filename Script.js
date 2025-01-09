let totalPoints = 30;

function addPoints(points) {
    totalPoints += points;
    document.getElementById('total-points').innerText = `Total Points: ${totalPoints}`;
    updateProgress();
}

function updateProgress() {
    const progress = document.getElementById('progress');
    const percentage = (totalPoints / 30) * 30; // Assuming 100 points is the goal
    progress.style.width = `${percentage}%`;
}

let progressData = [
  {
    userId: '1',
    data: { progressStage: 'Stage 1', score: 50 }
  },
  {
    userId: '2',
    data: { progressStage: 'Stage 2', score: 75 }
  }
];
module.exports.progressData = progressData;


exports.getUserProgress = (req, res) => {
  const progress = progressData.find(p => p.userId === req.params.userId);
  if (!progress) return res.status(404).json({ message: 'Progress not found' });
  res.json(progress);
};

exports.saveUserProgress = (req, res) => {
  const { progressData: newProgressData } = req.body;
  let progress = progressData.find(p => p.userId === req.params.userId);

  if (progress) {
    progress.data = newProgressData;
    res.json(progress);
  } else {
    progress = { userId: req.params.userId, data: newProgressData };
    progressData.push(progress);
    res.status(201).json(progress);
  }
};

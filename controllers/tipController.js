let tips = [
  {
    scenarioId: '1',
    content: 'Saving at least 20% of your income is a healthy financial habit.',
    id: 'tip1'
  },
  {
    scenarioId: '2',
    content: 'Using savings for emergencies helps avoid additional debt.',
    id: 'tip2'
  }
];
module.exports.tips = tips;


exports.getTipsForScenario = (req, res) => {
  const scenarioTips = tips.filter(tip => tip.scenarioId === req.params.scenarioId);
  if (!scenarioTips.length) return res.status(404).json({ message: 'No tips found' });
  res.json(scenarioTips);
};

exports.saveFeedback = (req, res) => {
  const { userId, feedback } = req.body;
  tips.push({ userId, feedback, id: Date.now().toString() });
  res.status(201).json({ message: 'Feedback received' });
};

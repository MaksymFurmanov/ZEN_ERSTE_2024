let scenarios = [
  {
    id: '1',
    title: 'Budget Planning',
    description: 'Help your family plan their monthly budget to achieve financial stability.',
    options: ['Save 20%', 'Invest 15%', 'Spend all', 'Pay off debts']
  },
  {
    id: '2',
    title: 'Unexpected Expense',
    description: 'An unexpected medical expense arises. How should you cover it?',
    options: ['Use savings', 'Take a loan', 'Crowdfund', 'Ignore it']
  }
];
module.exports.scenarios = scenarios;


exports.getScenarios = (req, res) => {
  res.json(scenarios);
};

exports.getScenarioById = (req, res) => {
  const scenario = scenarios.find(s => s.id === req.params.scenarioId);
  if (!scenario) return res.status(404).json({ message: 'Scenario not found' });
  res.json(scenario);
};

exports.addScenario = (req, res) => {
  const { title, description, options } = req.body;
  const scenario = { id: Date.now().toString(), title, description, options };
  scenarios.push(scenario);
  res.status(201).json(scenario);
};

exports.updateScenario = (req, res) => {
  const { title, description, options } = req.body;
  const scenario = scenarios.find(s => s.id === req.params.scenarioId);
  if (!scenario) return res.status(404).json({ message: 'Scenario not found' });

  scenario.title = title;
  scenario.description = description;
  scenario.options = options;

  res.json(scenario);
};

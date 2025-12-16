import React, { useState, useEffect } from 'react';
import { Send, Filter, Search, MapPin, Clock, User, FileText, CheckCircle, AlertCircle, Bot, Sparkles, Brain, Zap, Target, TrendingUp } from 'lucide-react';

const CivicIssueAssignment = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [assignmentNote, setAssignmentNote] = useState('');
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [aiMode, setAiMode] = useState(false);
  const [aiProcessing, setAiProcessing] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [aiRecommendations, setAiRecommendations] = useState(null);
  const [showAiInsights, setShowAiInsights] = useState(false);

  // Enhanced dummy data with AI analysis fields
  const [civicIssues, setCivicIssues] = useState([
    {
      id: 1,
      title: "Road Damage on Mall Road, Mussoorie",
      description: "Multiple potholes causing traffic issues near Picture Palace",
      reportedBy: "Rajesh Kumar",
      location: "Mall Road, Mussoorie, Dehradun",
      priority: "high",
      status: "pending",
      reportedAt: "2024-09-15",
      category: "Infrastructure",
      suggestedDepartment: "PWD",
      aiConfidence: 95,
      aiAnalysis: {
        urgency: "high",
        complexity: "medium",
        resourcesNeeded: ["Road repair crew", "Asphalt", "Traffic management"],
        estimatedTime: "3-5 days",
        similarIssues: 12
      }
    },
    {
      id: 2,
      title: "Water Supply Disruption in Haridwar",
      description: "No water supply for 3 days in Sector 12, affecting 200+ families",
      reportedBy: "Priya Sharma",
      location: "Sector 12, BHEL, Haridwar",
      priority: "critical",
      status: "pending",
      reportedAt: "2024-09-16",
      category: "Water Supply",
      suggestedDepartment: "Jal Sansthan",
      aiConfidence: 98,
      aiAnalysis: {
        urgency: "critical",
        complexity: "high",
        resourcesNeeded: ["Water tankers", "Pipe repair team", "Emergency supply"],
        estimatedTime: "1-2 days",
        similarIssues: 8
      }
    },
    {
      id: 3,
      title: "Garbage Collection Issue in Rishikesh",
      description: "Garbage not collected for a week in Tapovan area",
      reportedBy: "Amit Singh",
      location: "Tapovan, Rishikesh",
      priority: "medium",
      status: "assigned",
      reportedAt: "2024-09-14",
      category: "Sanitation",
      assignedTo: "Municipal Corporation",
      suggestedDepartment: "Municipal Corporation",
      aiConfidence: 92,
      aiAnalysis: {
        urgency: "medium",
        complexity: "low",
        resourcesNeeded: ["Garbage truck", "Collection crew"],
        estimatedTime: "1 day",
        similarIssues: 15
      }
    },
    {
      id: 4,
      title: "Street Light Outage in Nainital",
      description: "Multiple street lights not working in Mallital area since monsoon",
      reportedBy: "Sunita Joshi",
      location: "Mallital, Nainital",
      priority: "medium",
      status: "pending",
      reportedAt: "2024-09-13",
      category: "Electricity",
      suggestedDepartment: "UPCL",
      aiConfidence: 89,
      aiAnalysis: {
        urgency: "medium",
        complexity: "medium",
        resourcesNeeded: ["Electrical crew", "LED bulbs", "Wiring materials"],
        estimatedTime: "2-3 days",
        similarIssues: 6
      }
    },
    {
      id: 5,
      title: "Hospital Staff Shortage in Pauri",
      description: "Urgent need for additional medical staff at district hospital",
      reportedBy: "Dr. Vikash Rawat",
      location: "District Hospital, Pauri Garhwal",
      priority: "critical",
      status: "assigned",
      reportedAt: "2024-09-17",
      category: "Healthcare",
      assignedTo: "Health Department",
      suggestedDepartment: "Health Department",
      aiConfidence: 96,
      aiAnalysis: {
        urgency: "critical",
        complexity: "high",
        resourcesNeeded: ["Medical staff", "Temporary deployment", "HR coordination"],
        estimatedTime: "Immediate",
        similarIssues: 3
      }
    },
    {
      id: 6,
      title: "School Building Repair Needed",
      description: "Roof leakage in government primary school affecting classes",
      reportedBy: "Meera Bisht",
      location: "Govt. Primary School, Almora",
      priority: "high",
      status: "pending",
      reportedAt: "2024-09-12",
      category: "Education",
      suggestedDepartment: "Education Department",
      aiConfidence: 91,
      aiAnalysis: {
        urgency: "high",
        complexity: "medium",
        resourcesNeeded: ["Construction crew", "Roofing materials", "Safety equipment"],
        estimatedTime: "5-7 days",
        similarIssues: 9
      }
    }
  ]);

  const departments = [
    "PWD", "Jal Sansthan", "Municipal Corporation", "UPCL", 
    "Health Department", "Education Department", "Forest Department", 
    "Police Department", "Transport Department"
  ];

  // AI Department Matching Algorithm
  const getAIRecommendation = (issue) => {
    const keywords = {
      'PWD': ['road', 'bridge', 'infrastructure', 'pothole', 'construction', 'highway'],
      'Jal Sansthan': ['water', 'supply', 'pipeline', 'drainage', 'sewage', 'leak'],
      'Municipal Corporation': ['garbage', 'waste', 'sanitation', 'cleaning', 'municipal'],
      'UPCL': ['electricity', 'power', 'light', 'electrical', 'outage', 'transformer'],
      'Health Department': ['hospital', 'medical', 'health', 'doctor', 'clinic', 'medicine'],
      'Education Department': ['school', 'education', 'teacher', 'student', 'college', 'learning'],
      'Forest Department': ['tree', 'forest', 'wildlife', 'environment', 'conservation'],
      'Police Department': ['crime', 'safety', 'police', 'security', 'law', 'order'],
      'Transport Department': ['transport', 'bus', 'vehicle', 'traffic', 'route', 'parking']
    };

    const text = `${issue.title} ${issue.description} ${issue.category}`.toLowerCase();
    let scores = {};
    
    Object.entries(keywords).forEach(([dept, words]) => {
      scores[dept] = words.filter(word => text.includes(word)).length;
    });

    const bestMatch = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const confidence = Math.min(95, 70 + (scores[bestMatch] * 8));
    
    return { department: bestMatch, confidence };
  };

  const simulateAIAnalysis = async (issue) => {
    setAiProcessing(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const aiRec = getAIRecommendation(issue);
    
    setAiRecommendations({
      primaryDepartment: aiRec.department,
      confidence: aiRec.confidence,
      alternativeDepartments: departments.filter(d => d !== aiRec.department).slice(0, 2),
      reasoning: `Based on keyword analysis and historical data, this issue shows ${aiRec.confidence}% match with ${aiRec.department} responsibilities.`,
      estimatedResolutionTime: issue.aiAnalysis.estimatedTime,
      requiredResources: issue.aiAnalysis.resourcesNeeded,
      priorityAdjustment: issue.aiAnalysis.urgency,
      similarCases: issue.aiAnalysis.similarIssues
    });
    
    setSelectedDepartment(aiRec.department);
    setAiProcessing(false);
  };

  const filteredIssues = civicIssues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.reportedBy.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filterDepartment === 'all' || 
                             issue.suggestedDepartment === filterDepartment ||
                             issue.assignedTo === filterDepartment;
    
    const matchesStatus = filterStatus === 'all' || issue.status === filterStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'assigned': return 'text-blue-600 bg-blue-50';
      case 'resolved': return 'text-green-600 bg-green-50';
      case 'in-progress': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-600 bg-green-50';
    if (confidence >= 75) return 'text-blue-600 bg-blue-50';
    if (confidence >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const handleAssignIssue = (issue) => {
    setSelectedIssue(issue);
    setShowAssignModal(true);
    setAssignmentNote('');
    setSelectedDepartment(issue.suggestedDepartment || '');
    setAiRecommendations(null);
    setShowAiInsights(false);
  };

  const handleAIAssign = () => {
    simulateAIAnalysis(selectedIssue);
    setShowAiInsights(true);
  };

  const submitAssignment = () => {
    // Here you would typically make an API call to assign the issue
    console.log('Assigning issue:', selectedIssue.id, 'to department:', selectedDepartment, 'with note:', assignmentNote);
    
    // Update issue status locally (in real app, this would come from API response)
    setCivicIssues(prev => prev.map(issue => 
      issue.id === selectedIssue.id 
        ? { ...issue, status: 'assigned', assignedTo: selectedDepartment }
        : issue
    ));

    setShowAssignModal(false);
    setSelectedIssue(null);
    setAssignmentNote('');
    setAiRecommendations(null);
    setShowAiInsights(false);
  };

  const handleBulkAIAssign = async () => {
    const pendingIssues = civicIssues.filter(issue => issue.status === 'pending');
    setAiProcessing(true);
    
    // Simulate AI processing for bulk assignment
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setCivicIssues(prev => prev.map(issue => {
      if (issue.status === 'pending') {
        const aiRec = getAIRecommendation(issue);
        return { ...issue, status: 'assigned', assignedTo: aiRec.department };
      }
      return issue;
    }));
    
    setAiProcessing(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI-Powered Civic Issue Management</h1>
            <p className="text-gray-600">Intelligently assign civic issues to appropriate departments</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setAiMode(!aiMode)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center ${
                aiMode 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Bot className="w-4 h-4 mr-2" />
              AI Mode {aiMode ? 'ON' : 'OFF'}
            </button>
            <button
              onClick={handleBulkAIAssign}
              disabled={aiProcessing}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium transition-colors flex items-center disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {aiProcessing ? 'Processing...' : 'Bulk AI Assign'}
            </button>
          </div>
        </div>

        {aiMode && (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-2">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="font-semibold text-purple-900">AI Assistant Active</h3>
            </div>
            <p className="text-purple-700 text-sm">
              AI will analyze each issue and provide intelligent department recommendations with confidence scores.
            </p>
          </div>
        )}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by title, location, or reporter name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-3">
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="assigned">Assigned</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Issues Grid */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredIssues.map((issue) => (
          <div key={issue.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{issue.title}</h3>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(issue.priority)}`}>
                    {issue.priority}
                  </span>
                  {aiMode && issue.aiConfidence && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(issue.aiConfidence)}`}>
                      <Bot className="w-3 h-3 inline mr-1" />
                      {issue.aiConfidence}%
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{issue.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {issue.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="w-4 h-4 mr-2" />
                  {issue.reportedBy}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {new Date(issue.reportedAt).toLocaleDateString()}
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                  {issue.status === 'pending' && <AlertCircle className="w-3 h-3 inline mr-1" />}
                  {issue.status === 'assigned' && <CheckCircle className="w-3 h-3 inline mr-1" />}
                  {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
                </span>
                <span className="text-xs text-gray-500">
                  {aiMode ? 'AI Suggests' : 'Suggested'}: {issue.suggestedDepartment}
                </span>
              </div>

              {issue.assignedTo && (
                <div className="mb-4 p-2 bg-blue-50 rounded-md">
                  <span className="text-sm text-blue-700 font-medium">
                    Assigned to: {issue.assignedTo}
                  </span>
                </div>
              )}

              {aiMode && issue.aiAnalysis && (
                <div className="mb-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-md border border-purple-200">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-purple-600 mr-1" />
                    <span className="text-sm font-medium text-purple-900">AI Insights</span>
                  </div>
                  <div className="text-xs text-purple-700 space-y-1">
                    <div>Urgency: {issue.aiAnalysis.urgency}</div>
                    <div>Est. Time: {issue.aiAnalysis.estimatedTime}</div>
                    <div>Similar Cases: {issue.aiAnalysis.similarIssues}</div>
                  </div>
                </div>
              )}

              <button
                onClick={() => handleAssignIssue(issue)}
                disabled={issue.status === 'resolved'}
                className={`w-full font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center ${
                  aiMode 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } disabled:bg-gray-400`}
              >
                {aiMode ? <Bot className="w-4 h-4 mr-2" /> : <Send className="w-4 h-4 mr-2" />}
                {aiMode ? 'AI Assign' : (issue.status === 'assigned' ? 'Reassign' : 'Assign to Department')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No issues found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Enhanced Assignment Modal with AI */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              {aiMode && <Bot className="w-5 h-5 mr-2 text-purple-600" />}
              {aiMode ? 'AI-Powered Assignment' : 'Assign Issue to Department'}
            </h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">{selectedIssue?.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{selectedIssue?.location}</p>
              
              {aiMode && (
                <div className="mb-4">
                  <button
                    onClick={handleAIAssign}
                    disabled={aiProcessing}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center disabled:opacity-50 mb-4"
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    {aiProcessing ? 'AI Analyzing...' : 'Get AI Recommendation'}
                  </button>

                  {showAiInsights && aiRecommendations && (
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-3">
                        <Target className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="font-semibold text-purple-900">AI Recommendation</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-purple-700">Primary Department:</span>
                          <span className="font-semibold text-purple-900">{aiRecommendations.primaryDepartment}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-purple-700">Confidence Score:</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(aiRecommendations.confidence)}`}>
                            {aiRecommendations.confidence}%
                          </span>
                        </div>

                        <div>
                          <span className="text-sm text-purple-700 block mb-1">AI Reasoning:</span>
                          <p className="text-xs text-purple-600 bg-white p-2 rounded border">{aiRecommendations.reasoning}</p>
                        </div>

                        <div>
                          <span className="text-sm text-purple-700 block mb-1">Required Resources:</span>
                          <div className="flex flex-wrap gap-1">
                            {aiRecommendations.requiredResources.map((resource, idx) => (
                              <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                {resource}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-purple-700">Est. Resolution:</span>
                            <span className="block font-medium text-purple-900">{aiRecommendations.estimatedResolutionTime}</span>
                          </div>
                          <div>
                            <span className="text-purple-700">Similar Cases:</span>
                            <span className="block font-medium text-purple-900">{aiRecommendations.similarCases}</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-sm text-purple-700 block mb-1">Alternative Departments:</span>
                          <div className="flex gap-2">
                            {aiRecommendations.alternativeDepartments.map((dept, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                {dept}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Department
              </label>
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              >
                <option value="">Choose Department</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Assignment Note (Optional)
              </label>
              <textarea
                value={assignmentNote}
                onChange={(e) => setAssignmentNote(e.target.value)}
                placeholder="Add any special instructions or notes for the department..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowAssignModal(false)}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submitAssignment}
                disabled={!selectedDepartment}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CivicIssueAssignment;
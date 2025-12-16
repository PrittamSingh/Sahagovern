// FeaturesGrid.jsx

const FeaturesGrid = ({ features }) => (
  <div className="mb-20">
    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Why Choose सहgovern?
    </h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="text-center group hover:transform hover:scale-105 transition-all duration-300"
        >
          <div className="bg-white/80 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4 inline-flex mb-6 group-hover:animate-pulse">
              <feature.icon className="text-white" size={24} />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturesGrid;

import logo from './logo.svg';
import './App.css';
import Plans from './Plans';

function App() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      features: [
        { name: 'Single User', grey: true },
        { name: '5GB Storage', grey: true },
        { name: 'Unlimited Public Projects', grey: true },
        { name: 'Community Access', grey: true },
        { name: 'Unlimited Private Projects', grey: false },
        { name: 'Dedicated Phone Support', grey: false },
        { name: 'Free Subdomain', grey: false },
        { name: 'Monthly Status Reports', grey: false },

      ]
    },
    {
      name: 'Plus',
      price: '$9',
      features: [
        { name: '5 Users', grey: true },
        { name: '50GB Storage', grey: true },
        { name: 'Unlimited Public Projects', grey: true },
        { name: 'Community Access', grey: true },
        { name: 'Unlimited Private Projects', grey: true },
        { name: 'Dedicated Phone Support', grey: true },
        { name: 'Free Subdomain', grey: true },
        { name: 'Monthly Status Reports', grey: false },

      ]
    },
    {
      name: 'Pro',
      price: '$49',
      features: [
        { name: 'Unlimited Users', grey: true },
        { name: '150GB Storage', grey: true },
        { name: 'Unlimited Public Projects', grey: true },
        { name: 'Community Access', grey: true },
        { name: 'Unlimited Private Projects', grey: true },
        { name: 'Dedicated Phone Support', grey: true },
        { name: 'Unlimited Free Subdomains', grey: true },
        { name: 'Monthly Status Reports', grey: true },

      ]
    }
  ]

  return (
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
      {
     tiers.map((tiers,index) => {
      return <Plans key={index} name={tiers.name} price={tiers.price} features={tiers.features}/>
      }) 
    }
    </div>
  </div>
</section>
  );
}

export default App;

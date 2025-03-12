namespace HousesApi;

public class BidRepository
{
    private readonly List<Bid> bids =
    [
        new()
        {
            Id = 1,
            HouseId = 1,
            Bidder = "Sonia Reading",
            Amount = 200000
        },
        new()
        {
            Id = 2,
            HouseId = 1,
            Bidder = "Dick Johnson",
            Amount = 202400
        },
        new()
        {
            Id = 3,
            HouseId = 2,
            Bidder = "Mohammed Vahls",
            Amount = 302400
        },
        new()
        {
            Id = 4,
            HouseId = 2,
            Bidder = "Jane Williams",
            Amount = 310500
        },
        new()
        {
            Id = 5,
            HouseId = 2,
            Bidder = "John Kepler",
            Amount = 315400
        },
        new()
        {
            Id = 6,
            HouseId = 3,
            Bidder = "Bill Mentor",
            Amount = 201000
        },
        new()
        {
            Id = 7,
            HouseId = 4,
            Bidder = "Melissa Kirk",
            Amount = 410000
        },
        new()
        {
            Id = 8,
            HouseId = 4,
            Bidder = "Scott Max",
            Amount = 450000
        },
        new()
        {
            Id = 9,
            HouseId = 4,
            Bidder = "Christine James",
            Amount = 470000
        },
        new()
        {
            Id = 10,
            HouseId = 5,
            Bidder = "Omesh Carim",
            Amount = 450000
        },
        new()
        {
            Id = 11,
            HouseId = 5,
            Bidder = "Charlotte Max",
            Amount = 150000
        },
        new()
        {
            Id = 12,
            HouseId = 5,
            Bidder = "Marcus Scott",
            Amount = 170000
        }
    ];
    public IEnumerable<Bid> GetBids(int houseId)
    {
        return bids.Where(b => b.HouseId == houseId);
    }
    
    public void Add(Bid bid)
    {
        var maxId = bids.Max(b => b.Id);
        bid.Id = maxId + 1;
        bids.Add(bid);
    }
};

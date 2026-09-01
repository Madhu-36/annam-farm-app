from utils import calculate_revenue, normalize_feature

def test_calculate_revenue():
    # Test known crop
    assert calculate_revenue(10.0, "Wheat") == 22750.0
    # Test fallback
    assert calculate_revenue(10.0, "UnknownCrop") == 20000.0

def test_normalize_feature():
    # Test normal range
    assert normalize_feature(5.0, 0.0, 10.0) == 0.5
    # Test min == max
    assert normalize_feature(5.0, 5.0, 5.0) == 0.0

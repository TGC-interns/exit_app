import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.courseTitle}>Refrigeration and Airconditioning</Text>
          {/* Tabs */}
          <View style={styles.tabs}>
            <Text style={styles.tab}>Discussions</Text>
            <Text style={styles.tab}>People</Text>
            <Text style={[styles.tab, styles.activeTab]}>Schedule</Text>
            <Text style={styles.tab}>Settings</Text>
          </View>
        </View>

        {/* Calendar */}
        <View style={styles.calendar}>
          <Text style={styles.month}>May 2025</Text>
          <View style={styles.daysRow}>
            <Text style={styles.day}>Mo</Text>
            <Text style={styles.day}>Tu</Text>
            <Text style={[styles.day, styles.activeDay]}>We</Text>
            <Text style={styles.day}>Th</Text>
            <Text style={styles.day}>Fr</Text>
            <Text style={styles.day}>Sa</Text>
            <Text style={styles.day}>Su</Text>
          </View>
        </View>

        {/* Example Schedule Card */}
        <View style={styles.card}>
          <Text style={styles.date}>23 June</Text>
          <Text style={styles.title}>Air Refrigeration Systems</Text>
          <Text style={styles.subtitle}>Unit: 1 · Practical</Text>
          <TouchableOpacity style={styles.completedButton}>
            <Text style={styles.completedText}>Completed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 16, backgroundColor: '#dbeee3' },
  courseTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  tabs: { flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' },
  tab: { fontSize: 14, color: '#666' },
  activeTab: { color: '#2e7d32', fontWeight: 'bold', borderBottomWidth: 2, borderBottomColor: '#2e7d32' },

  calendar: { padding: 16, backgroundColor: '#fff' },
  month: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  daysRow: { flexDirection: 'row', justifyContent: 'space-between' },
  day: { fontSize: 14, color: '#666' },
  activeDay: { color: '#2e7d32', fontWeight: 'bold' },

  card: { backgroundColor: '#f9f9f9', margin: 12, padding: 16, borderRadius: 12, elevation: 2 },
  date: { fontSize: 14, color: '#888' },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  subtitle: { fontSize: 14, color: '#555', marginTop: 2 },
  completedButton: { marginTop: 10, padding: 8, backgroundColor: '#e0f2f1', borderRadius: 8 },
  completedText: { color: '#2e7d32', textAlign: 'center' },

  fab: { position: 'absolute', bottom: 20, right: 20, backgroundColor: '#fdd835', borderRadius: 50, padding: 16, elevation: 4 },
  fabText: { fontSize: 24, fontWeight: 'bold', color: '#333' },
});

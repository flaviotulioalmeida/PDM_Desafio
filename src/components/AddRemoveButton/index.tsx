import { Minus, Plus } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { transformToStartWithZero } from '../../utils';

type AddRemoveButtonProps = {
  value: number;
  setValue: (value: number) => void;
}

export const AddRemoveButton = ({ value, setValue,...rest }: AddRemoveButtonProps) => {
  return (
    <View style={styles.container}>
      {/**Botão de remover */}
      <Pressable onPress={() => setValue(value - 1)} style={styles.buttonWhiteSmoke}>
        <Minus color='#96A3AB' size={12} fontWeight={700} />
      </Pressable>

      {/**Espaço do meio que mostra o valor */}
      <View style={styles.space}>
        <Text style={styles.value}>
          {transformToStartWithZero(value)}
        </Text>
      </View>

      {/**Botão de adicionar */}
      <Pressable style={styles.buttonOrange} onPress={() => setValue(value + 1)}>
        <Plus color="#FFFFFF" size={12} fontWeight={700} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 140,
  },
  space: {
    minWidth: '10%',
    padding: 11,

  },
  buttonOrange: {
    width: 48,
    height: 48,
    backgroundColor: '#FB9400',
    color: '#FFFFFF',
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
  },
  buttonWhiteSmoke: {
    width: 48,
    height: 48,
    backgroundColor: '#F2F4F5',
    alignItems: 'center',
    borderTopLeftRadius: 4,
    justifyContent: 'center',
  },
  value: {
    fontSize: 20,
    color: '#FB9400'
  }
});